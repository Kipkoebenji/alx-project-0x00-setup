import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Buttons Showcase</h1>

      <div className="space-y-4">
        <div className="space-x-4">
          <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
          <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
          <Button title="Large Rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
        </div>

        <div className="space-x-4">
          <Button title="Small Rounded-md" styles="text-sm rounded-md" />
          <Button title="Medium Rounded-md" styles="text-base rounded-md" />
          <Button title="Large Rounded-md" styles="text-lg px-6 py-3 rounded-md" />
        </div>

        <div className="space-x-4">
          <Button title="Small Rounded-full" styles="text-sm rounded-full" />
          <Button title="Medium Rounded-full" styles="text-base rounded-full" />
          <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full" />
        </div>
      </div>
    </div>
    </div>
  )
}
export default Landing
