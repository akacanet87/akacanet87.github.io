import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET,
    }),
  ],
  // secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  // pages: {
  //   // signIn: '/auth/login',
  //   signOut: '/auth/signout',
  //   error: '/error',
  //   verifyRequest: '/auth/verify-request',
  //   newUser: '/auth/signup',
  // },
  // session: {
  //   strategy: 'jwt'
  // },
})
