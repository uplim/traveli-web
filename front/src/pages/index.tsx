import Link from 'next/link'

const Index = () => {
  return (
    <>
      <p>indexページ</p>
      <Link href="/signin" passHref>
        <a href="replace">
          <p>/signin</p>
        </a>
      </Link>
    </>
  )
}

export default Index
