
export default function Footer() {
  const data = new Date().getFullYear()
  return (
    <div className="flex justify-center text-white font-bold">
      <ul className="flex gap-3 p-4">
        <li>
         {data} &copy; Eduardo Santos do Nascimento 
        </li>
      </ul>
      
    </div>
  )
}
