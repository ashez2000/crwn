import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import config from '../config'

import MainLayout from '../layouts/MainLayout'
import ProductCard from '../components/ProductCard'

const HomePage = (props) => {
  const { products } = props

  console.log(config.apiUrl)

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

export async function getServerSideProps(context) {
  const res = await axios.get(`${config.apiUrl}/api/products`)

  return {
    props: {
      products: res.data,
    },
  }
}

export default HomePage
