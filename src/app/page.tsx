import { css } from "@/styled-system/css";

export default function Home() {
  return (
    <main className={css({ padding: '8', minHeight: '100vh' })}>
      <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', color: 'blue.600' })}>
        Hello Next.js with Panda CSS
      </h1>
      <p className={css({ marginTop: '4', color: 'gray.700' })}>
        最小限のセットアップが完了しました
      </p>
    </main>
  )
}