import Link from 'next/link';

export async function getStaticPaths() {
const result = await fetch('http://localhost:3000/city').then (result => result.json())
console.log(result);

const path = result.cities.map(item =>{
          return{ 
                    params:{
                        slug: item.slug      
                    }
          }
})
        return {
          paths: path,
          fallback:false
        }
      }

      export async function getStaticProps({params}){
      const result = await fetch(`http://localhost:3000/city/${params.slug}`).then (result => result.json())
const data = {
name: params.slug,
hotels: result.hotels
     }
      return{
        props: {
          data: data
        },
      }
      }

export default function About(props) {

  const renderHotels = () => {
    return props.data.hotels.map(item =>{

        return(
          <div>
            <h1>{item.name}</h1>
            <h3>{item.location}</h3>
            <p>{item.description}</p>
            <p>${item.price}/night</p>
            </div>
        )
      })
    }

    return(
      <div>
        {renderHotels()}
      </div>
   
    )
    }     