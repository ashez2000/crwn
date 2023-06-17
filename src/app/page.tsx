import CategoryItem from '@/components/CategoryItem'

const categories = [
    {
        id: 1,
        title: 'hats',
        image: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
        id: 2,
        title: 'jackets',
        image: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
        id: 3,
        title: 'sneakers',
        image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
        id: 4,
        title: 'womens',
        image: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
        id: 5,
        title: 'mens',
        image: 'https://i.ibb.co/R70vBrQ/men.png',
    },
]

export default function Home() {
    return (
        <div>
            <h1>Home</h1>

            <div className="d-grid gap-3">
                <div className="row row-cols-3">
                    <CategoryItem item={categories[0]} />
                    <CategoryItem item={categories[1]} />
                    <CategoryItem item={categories[2]} />
                </div>

                <div className="row row-cols-2">
                    <CategoryItem item={categories[3]} size="lg" />
                    <CategoryItem item={categories[4]} size="lg" />
                </div>
            </div>
        </div>
    )
}
