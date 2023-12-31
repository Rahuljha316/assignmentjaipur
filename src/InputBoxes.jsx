import { InputAdornment, TextField } from "@material-ui/core";
import location from './assets/Location.svg'
import Bag from './assets/bag.svg'

const InputBoxes = ( ) => {
    return (
        <div className="main-box">
            <div className="input-container">
            <TextField
            className="inputfield"
              variant="outlined"
              label="Origin"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><img src={location} /></InputAdornment>,
              }}
              
            />
            <TextField
            className="inputfield"

            variant="outlined"
          label="Destination"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><img src={location} /></InputAdornment>,
          }}
        />
            <TextField
            className="inputfield"

            variant="outlined"
          label="Weight"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><img src={Bag} /></InputAdornment>,
          }}
        />
                
                <button className="flex-1 checkbtn inputfield">Check Price</button>
   
            </div>
        </div>
    )
}

export default InputBoxes;