export default function Prayer(){

return(

<div className="max-w-xl mx-auto py-20 px-6">

<h1 className="text-3xl font-bold mb-6">
Submit Prayer Request
</h1>

<form className="flex flex-col gap-4">

<input
className="border p-3 rounded"
placeholder="Your name"
/>

<textarea
className="border p-3 rounded"
placeholder="Your prayer request"
/>

<button
className="bg-blue-900 text-white py-3 rounded"
>
Submit Request
</button>

</form>

</div>

)

}