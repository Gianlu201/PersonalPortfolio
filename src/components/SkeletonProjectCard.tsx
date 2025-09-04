interface Props {
  isShowcase: boolean;
}

const SkeletonProjectCard = ({ isShowcase }: Props) => {
  return (
    <div className='rounded-xl overflow-hidden border border-gray-500 bg-linear-to-t from-background-light to-background shadow-md shadow-gray-600 hover:shadow-black hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 group cursor-pointer'>
      <div className='w-full aspect-15/10 overflow-hidden relative bg-gray-400 animate-pulse'></div>

      {!isShowcase && (
        <div className='px-5 pt-3'>
          <h3 className='text-2xl font-bold mb-2 line-clamp-1 bg-gray-500 text-gray-500 animate-pulse rounded-lg'>
            Titolo
          </h3>
          <p className='px-3 py-1 pt-1.5 rounded-full w-fit text-xs font-bold capitalize mb-3 bg-gray-500 text-gray-500 animate-pulse'>
            Categoria
          </p>

          <p className='bg-gray-500 text-gray-500 animate-pulse rounded text-xs mb-1.5'>
            row1
          </p>
          <p className='bg-gray-500 text-gray-500 animate-pulse rounded text-xs mb-1.5'>
            row2
          </p>
          <p className='bg-gray-500 text-gray-500 animate-pulse rounded text-xs mb-1.5'>
            row3
          </p>

          <div className='flex justify-end items-center gap-4 mt-4 mb-6'>
            <div className='w-6 h-6 bg-gray-500 text-gray-500 animate-pulse rounded-lg'></div>
            <div className='w-6 h-6 bg-gray-500 text-gray-500 animate-pulse rounded-lg'></div>
            <div className='w-6 h-6 bg-gray-500 text-gray-500 animate-pulse rounded-lg'></div>
            <div className='w-6 h-6 bg-gray-500 text-gray-500 animate-pulse rounded-lg'></div>
          </div>
        </div>
      )}

      <div className='flex justify-center items-center gap-4 my-5 px-5'>
        <div className='grow flex justify-center items-center gap-2 text-sm font-semibold border border-gray-500 rounded-xl px-3 py-2 bg-gray-500 text-gray-500 animate-pulse'>
          GitHub
        </div>
        {
          <div className='grow flex justify-center items-center gap-2 text-sm font-semibold border border-black rounded-xl px-3 py-2 bg-gray-500 text-gray-500 animate-pulse'>
            Demo
          </div>
        }
      </div>
    </div>
  );
};

export default SkeletonProjectCard;
