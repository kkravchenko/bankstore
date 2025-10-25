import Header from './components/Header/'
import LeftSide from './components/LeftSide/'
import RightSide from './components/RightSide/'

export default function DashboardLayout() {
  return (
    <div className='grid'>
      <div className='col-span-full bg-[#18101d] text-white sticky top-0 relative z-10'>
        <Header />
      </div>

      <div className='grid grid-cols-[255px_1fr] col-span-full min-h-[calc(100vh-56px)]'>
        <div className='bg-[#18101d] p-4 pb-6 text-white'>
          <LeftSide />
        </div>
        <div className='bg-[#f9fafc]'>
          <RightSide />
        </div>
      </div>
    </div>
  )
}
