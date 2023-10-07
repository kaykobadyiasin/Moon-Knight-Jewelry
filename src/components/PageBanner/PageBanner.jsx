

const PageBanner = ({ image, title, subtitle }) => {
    return (
        <div>
            <div
                className="object-cover bg-cover bg-left h-[200px] relative"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {title}
                    </h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;