import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

export default function About(props) {
  const isAmp = useAmp()

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        <amp-img
          width="600"
          height="300"
          src="assets/1.png"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="700" height="300" src="assets/1.png" alt="a cool image" layout="responsive"/>
      )}
    </div>
  )
}