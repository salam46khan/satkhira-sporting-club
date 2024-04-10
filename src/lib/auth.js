import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDb } from "./utils";
import { User } from "./models";
import bcrypt from 'bcryptjs'
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        connectDb()
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
            throw new Error('wrong credential')
        }
        const isPassword = await bcrypt.compare(credentials.password, user.password)
        if (!isPassword) {
            throw new Error('wrong credential')
        }
        return user
    }
    catch (err) {
        console.log(err);
        throw new Error('fail login')
    }
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
        async authorize(credentials) {
            try {
                const user = await login(credentials)
                return user
            }
            catch (err) {
                // console.log(err);
                return null
            }
        }
    })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if (account?.provider === 'github') {
                connectDb()
                try {
                    const user = await User.findOne({ email: profile.email })
                    if (!user) {
                        const newUser = new User({
                            name: profile.name,
                            email: profile.email,
                            image: profile.avatar_url,
                        });
                        await newUser.save()
                    }
                }
                catch (err) {
                    console.log(err);
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks
    }
})