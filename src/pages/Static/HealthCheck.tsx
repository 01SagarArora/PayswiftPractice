import Container from '@mui/material/Container';
import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';

const HealthCheck = () =>{
  return (
    <Container>
      <SEO title={PAGE.defaultPage.title} description={PAGE.defaultPage.description} />
      <div>Application WOrking Fine</div>
    </Container>
  )
}

export  {HealthCheck};