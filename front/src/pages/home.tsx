import Link from 'next/link'

const Home = () => {
  return (
    <>
      <p>homeページ</p>
      <Link href="/create" passHref>
        <a href="replace">
          <p>/create</p>
        </a>
      </Link>
      <Link href="/user" passHref>
        <a href="replace">
          <p>/user</p>
        </a>
      </Link>
      <Link href="/id" passHref>
        <a href="replace">
          <p>/[id]</p>
        </a>
      </Link>
    </>
  )
}

export default Home
