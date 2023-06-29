import Link from 'next/link'

type Props = {
  title: string
  size?: 'sm' | 'lg'
}

export default function CategoryItem({ title, size = 'sm' }: Props) {
  return (
    <Link href={`/products/${title}`}>
      <div
        style={{
          height: `${size === 'sm' ? 240 : 380}px`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundImage: `url(/category/${title}.png)`,
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div
          className="d-flex flex-column justify-content-center align-items-center p-3"
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.7,
          }}
        >
          <h2 className="fw-bold">{title}</h2>
          <span>SHOP NOW</span>
        </div>
      </div>
    </Link>
  )
}
