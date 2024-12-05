import Swal from 'sweetalert2'

const AddReview = () => {

  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const publishingYear = form.publishingYear.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const text = form.text.value;

    const newReview = {gameCover, gameTitle, publishingYear, reviewDescription, rating, genre, email, text}
    console.log(newReview);


    // send data to the server
    fetch('http://localhost:5000/review',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'User Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
  }



  return (
    <div class="bg-pink-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleAddReview} class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 class="text-pink-500 text-2xl font-bold mb-4 text-center">
          Add New Game Review
        </h2>

        <div class="mb-4">
          <label class="block text-pink-500 font-medium mb-1">
            Game Cover Image (URL)
          </label>
          <input
            type="url"
            name="gameCover"
            class="w-full border border-pink-300 rounded p-2"
            placeholder="Enter cover image URL"
            required
          />
        </div>

        {/* <!-- Game Title and Publishing Year (Side by Side) --> */}
        <div class="flex gap-4 mb-4">
          {/* <!-- Game Title --> */}
          <div class="flex-1">
            <label class="block text-pink-500 font-medium mb-1">
              Game Title
            </label>
            <input
              type="text"
              name="gameTitle"
              class="w-full border border-pink-300 rounded p-2"
              placeholder="Enter game title"
              required
            />
          </div>

          {/* <!-- Publishing Year --> */}
          <div class="flex-1">
        <label class="block text-pink-500 font-medium mb-1">
          Publishing Year
        </label>
        <select
          name="publishingYear"
          class="w-full border border-pink-300 rounded p-2"
          required
        >
          <option value="" disabled selected>Select a year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option> 
          <option value="2021">2020</option> 
          <option value="2021">2019</option> 
          <option value="2021">2018</option> 
          <option value="2021">2017</option> 
          <option value="2021">2016</option> 
          <option value="2021">2015</option> 
          <option value="2021">2014</option> 
          <option value="2021">2013</option> 
          <option value="2021">2012</option> 
        </select>
      </div>

        </div>

        {/* <!-- Review Description AND Rating (Side by Side) --> */}
        <div class="flex gap-4 mb-4">
          {/* <!-- Review Description --> */}
          <div class="flex-1">
            <label class="block text-pink-500 font-medium mb-1">
              Review Description
            </label>
            <textarea
              name="reviewDescription"
              class="w-72 border border-pink-300 rounded p-2"
              placeholder="Write your detailed review"
              rows="4"
              required
            ></textarea>
          </div>

          {/* <!-- Rating --> */}
          <div class="w-3/5 ml-2">
            <label class="block text-pink-500 font-medium mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              class="w-full border border-pink-300 rounded p-2"
              placeholder="Enter rating (1-5)"
              min="1"
              max="5"
              required
            />
          </div>
        </div>

        {/* <!-- Genre  User Email (Side by Side) --> */}
        <div class="flex gap-4 mb-4">
          {/* <!-- Genre --> */}
          <div class="flex-1">
            <label class="block text-pink-500 font-medium mb-1">Genre</label>
            <select
              name="genre"
              class="w-full border border-pink-300 rounded p-2"
              required
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          {/* <!-- User Email --> */}
          <div class="flex-1">
            <label class="block text-pink-500 font-medium mb-1">
              User Email
            </label>
            <input
              type="email"
              name="email"
              class="w-full border border-pink-300 rounded p-2 bg-gray-100"
              placeholder="User email"
              readonly
            />
          </div>
        </div>

        {/* <!-- User Name --> */}
        <div class="mb-4">
          <label class="block text-pink-500 font-medium mb-1">User Name</label>
          <input
            type="text"
            name="text"
            class="w-full border border-pink-300 rounded p-2 bg-gray-100"
            placeholder="User name"
            readonly
          />
        </div>
        {/* <!-- Submit Button --> */}
        <input
          type="submit"
          value="Submit Review"
          className="w-full bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600"
        ></input>
      </form>
    </div>
  );
};

export default AddReview;
