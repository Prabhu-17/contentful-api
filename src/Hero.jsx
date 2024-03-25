import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore assumenda quo animi similique et quis temporibus amet eveniet dignissimos ex quidem, tempore quae soluta nisi error accusamus, itaque alias ullam.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="stack browser img" className='img' />
            </div>
        </div>
    </section>
  )
}
export default Hero