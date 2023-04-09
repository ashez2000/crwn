import { useRouter } from 'next/router';

import React from 'react';

export default function CategoryItem({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      </div>
    </div>
  );
}
