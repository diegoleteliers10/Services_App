import { request, gql } from 'graphql-request'

const MASTER_URL='https://api-sa-east-1.hygraph.com/v2/clrcqh59p20pi01wdx63u49gb/master'

const getSlider= async ()=>{
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `
  const response= await request(MASTER_URL, query)
  return response
}

export default {
  getSlider
}
