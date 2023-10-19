import GoogleProvider from "next-auth/providers/google"
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextAuthOptions } from "next-auth";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();

                // check if a user already exist
                const userExist = await User.findOne({ email: profile.email });

                // if not create a new user
                if (!userExist) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, '').toLowerCase(),
                        image: profile.image
                    });
                }

                return true;
            } catch (error) {
                console.log(error);

                return false;
            }
        }
    }
} satisfies NextAuthOptions