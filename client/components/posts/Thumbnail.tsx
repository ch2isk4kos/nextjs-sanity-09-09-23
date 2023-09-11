// const root = `mx-auto my-5 bg-blue-400`;
// const root = `py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6`;
const root = `flex flex-col items-center w-auto h-[25rem] bg-blue-500`;
const img = `h-[60%] w-[100%] bg-white`;
const h3 = `text-xl`;
const pDate = `display-0 text-xs`;
const pDescription = ``;

function Thumbnail({ ...props }) {
  const {date, description, image, title} = props;
  const frmt = new Date(date);

  return (
    <div className={root}>
      <img className={img} src={image}></img>
      <h3 className={h3}>{title}</h3>
      <p className={pDate}>{frmt.toDateString()}</p>
      <p className={pDescription}>{description}</p>
    </div>
  )
}

export default Thumbnail;