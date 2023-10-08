import PageBanner from "../../components/PageBanner/PageBanner";



const About = () => {
    return (
        <div>
            <PageBanner image={'https://images.unsplash.com/photo-1569173675610-42c361a86e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80'} title={'About Us'} subtitle={'Brandit Fashion Ltd.'} />
            <div className="container mx-auto my-10">
                <p><strong>Brandit Fashion Ltd.</strong> is small garment company specializes in producing school uniforms through online primarily and for the corporate firms. They offer a wide range of clothing options, including shirts, trousers, skirts, blazers, and accessories such as ties and scarves. With a focus on quality and professionalism, they ensure that their garments are made from durable and comfortable materials that meet the specific requirements of corporate environments. The company also provides customization services, allowing corporate firms to incorporate their branding elements, such as logos and colors, into the uniforms. With their attention to detail and commitment to customer satisfaction, this small garment company aims to provide corporate firms with stylish and functional uniforms that enhance their professional image.</p>
            </div>
        </div>
    );
};

export default About;