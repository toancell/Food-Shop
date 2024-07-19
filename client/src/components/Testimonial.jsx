import  Testimonial1  from "../assets/images/home/testimonials/testimonials.png"

const Testimonial = () => {
  return (
    <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <img src={Testimonial1} alt="" />
            </div>
            <div className="md:w-1/2">
                <div className="text-left  space-y-4">
                    <p className="subtitle">Testimonials</p>
                    <h2 className="title">What Our Customers Say About Us: </h2>
                    <blockquote className="font-semibold text-secondary leading-9">
                        "I had the pleasure of dining at this restaurant, and I'm still raving about the experience"
                    </blockquote>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonial
