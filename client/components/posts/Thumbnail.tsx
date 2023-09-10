// const root = `mx-auto my-5 bg-blue-400`;
// const root = `py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6`;
const root = ``;


function Thumbnail({ ...props }) {
  const {title} = props;
  
  return (
    <div className={root}>
      <h3>{title}</h3>
    </div>
  )
}

export default Thumbnail;