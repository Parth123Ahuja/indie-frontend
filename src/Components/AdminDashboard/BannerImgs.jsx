const BannerImgs = ({ banner }) => {
    return (
      <div className="flex px-4">
          <div className='text-center mx-auto'>
            <img 
                className="mx-auto"
                src={banner.image}
                alt={banner.name}/>
          </div>
      </div>
    );
  };
  
  export default BannerImgs;