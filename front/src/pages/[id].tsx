import Link from 'next/link'

const LinkList = () => {
  return (
    <>
      <p>LinkListページ</p>
      <Link href="/edit" passHref>
        <a href="replace">
          <p>/edit</p>
        </a>
      </Link>
    </>
  )
}

export default LinkList
