import photo from '../../assets/photo.png'

const Biography = () => {
    return (
        <div className="flex md:flex-row flex-col items-center gap-20 md:gap-28 mt-16 md:mt-28 lg:mt-16">
            <div className='md:w-1/3 w-auto'>
                <img className='shadow-lg rounded-md shadow-[#2e2c39]' src={photo} alt="" />
            </div>
            <div className='md:w-2/3 w-auto'>
                <h3 className='text-2xl mb-4 font-bold md:text-start text-center text-[#2e2c39]'>BIOGRAPHY</h3>
                <p className='text-sm text-balance'>Hi, I’m Ishrat Jahan Mishu, an enthusiastic and aspiring front-end developer with a <span className='font-medium'>strong learning mindset</span>. I am passionate about building visually appealing and user-friendly websites. <span className='font-medium'>My journey into web development began recently,</span> but I am dedicated to continually improving my skills and knowledge.
                    <br />
                    <br />
                    As a junior web developer, I <span className='font-medium'>believe</span> that coding goes beyond just making websites functional – it's about <span className='font-medium'>solving problems</span> and creating
                    <span className='font-medium'> seamless,</span>
                    <span className='font-medium'> enjoyable experiences</span> for users.
                    <br />
                    <br />
                    Whether I'm developing a front-end interface, building <span className='font-medium'>responsive layouts,</span> or working on interactive elements, I bring my dedication to <span className='font-medium'>clean, efficient code</span> and user-centered thinking to every project. I look forward to applying my skills and passion for development to help creating impactful, engaging web experiences for your next project.   
                </p>
            </div>
        </div>
    );
};

export default Biography;