import { cva, sva } from "@/styled-system/css";

const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
})

const button2 = sva({
  slots: ['root'],
  base: {
    root: {
      display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transition: 'all 0.2s',
    cursor: 'pointer',
    },
  },
})


export default function Home() {

  return (
    <div>
      <button className={button()}>CVA Button</button>
      <button className={button2().root}>SVA Button</button>
    </div>
  )
}