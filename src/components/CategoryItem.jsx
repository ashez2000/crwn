import { useRouter } from 'next/router';

export default function CategoryItem({ item }) {
  const router = useRouter();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>

        <button
          className="btn btn-sm btn-primary"
          onClick={() => router.push(`/shop/${item.title}`)}
        >
          View
        </button>
      </div>
    </div>
  );
}
