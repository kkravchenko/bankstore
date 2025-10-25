import Radio from '@/presentation/components/Radio'

export default () => {
  return (
    <div className='ml-3 flex items-center gap-3'>
      <Radio label='Low to High' name='sort' />
      <Radio label='High to Low' name='sort' checked={true} />
    </div>
  )
}
