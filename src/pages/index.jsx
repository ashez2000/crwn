import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainLayout from '../layouts/MainLayout'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

const HomePage = () => {
  return (
    <MainLayout>
      <Row>
        {products.map((product) => (
          <Col key={product.name} xs={12} md={6} lg={4}>
            <ProductCard key={product.id} item={product} />
          </Col>
        ))}
      </Row>
    </MainLayout>
  )
}

export default HomePage
