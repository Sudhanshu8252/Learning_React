import Card from './components/Card'



const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZPJAE0dqPukUcuiRdQe0U0oNM6IM7B_ZSA&s",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$58/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$80/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$62/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://brandlogos.net/wp-content/uploads/2025/09/nvidia_icon-logo_brandlogos.net_zn1en.png",
    companyName: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$59/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebmljEurgrbmbdcXTZrY46Cd9icRfi_10KQ&s",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "UI/UX Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i42tGzPT6OkPeC4pFdWZMTXL--bXWtNG6w&s",
    companyName: "Intel",
    datePosted: "5 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$48/hr",
    location: "Bangalore, India"
  }
];
console.log(jobOpenings)
  return (
    <div className ='parent'>
     {jobOpenings.map(function(elem,idx){
      
      return <div key={idx}>
        <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour}/>
      </div>
     })}
    
       
      </div>

    
  )
}

export default App