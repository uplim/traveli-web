import Link from 'next/link'

const LinkEdit = () => {
  return (
    <>
      <p>Traevelink編集ページ！</p>
      <Link href="/edit" passHref>
        <a href="replace">
          <p>/edit</p>
        </a>
      </Link>
    </>
  )
}

export default LinkEdit
