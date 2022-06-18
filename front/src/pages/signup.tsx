import Link from 'next/link'

const Signup = () => {
  return (
    <>
      <p>signupページ</p>
      <Link href="/home" passHref>
        <a href="replace">
          <p>/home</p>
        </a>
      </Link>
    </>
  )
}

export default Signup
