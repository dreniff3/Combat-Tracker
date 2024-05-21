import { useState } from "react";

const AddFighters = ({ fighters, setFighters }) => {
    const [name, setName] = useState('');
    const [initiative, setInitiative] = useState(0);
    const [armor, setArmor] = useState(0);
    const [maxHealth, setMaxHealth] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // don't add fighters without required inputs
        if (name === '' || initiative === 0 || armor === 0 || maxHealth === 0) {
          return false;
        }

        let fighter = {
            name, 
            initiative,
            armor,
            // TODO: bugfix -- on new round, currHealth is reset to maxHealth
            currHealth: maxHealth, 
            maxHealth,
        };
        setFighters(fighters => [...fighters, fighter].sort((a, b) => b.initiative - a.initiative));
        setName('');
        setInitiative(0);
        setArmor(0);
        setMaxHealth(0);
    };
    
    return (
<div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div id="name">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div id="initiative">
              <label htmlFor="init">Initiative: </label>
              <input 
                type="number"
                name="init"
                value={initiative}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setInitiative(e.target.value)}
              />
            </div>
            <div id="armor">
              <label htmlFor="armor">Armor Class: </label>
              <input 
                type="number"
                name="armor"
                value={armor}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setArmor(e.target.value)}
              />
            </div>
            <div id="health">
              <label htmlFor="health">Health: </label>
              <input 
                type="number"
                name="health"
                value={maxHealth}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setMaxHealth(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
};

export default AddFighters;