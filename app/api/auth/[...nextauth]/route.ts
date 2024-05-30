import { getUser } from "@/app/context/queryData";
import { randomUUID } from "crypto";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

const handler = NextAuth({
    pages: {
        signIn: '/login',
    },

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { 
                    label: "Username", 
                    type: "email", 
                },
                password: { 
                    label: "Password", 
                    type: "password" 
                }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                if (
                    credentials?.email &&  credentials?.password
                ) {
                    return {
                        id: randomUUID().toString(),
                        email: credentials?.email
                    }
                }

                return null;
            },
        })
    ]
})

export { handler as GET, handler as POST }