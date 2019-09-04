import { useState, useEffect } from 'react';

const initialPeople = [
  {
    first: 'Hans',
    last: 'Emil'
  },
  {
    first: 'Max',
    last: 'Mustermann'
  },
  {
    first: 'Roman',
    last: 'Tisch'
  }
];

export default () => {
  const [{ people, selected }, setPeople] = useState({ people: initialPeople, selected: 0 });
  const [prefix, setPrefix] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(people[selected]);

  const filteredPeople = prefix
    ? people.filter(person => {
        const name = `${person.last}, ${person.first}`;
        return name.toLowerCase().startsWith(prefix.toLowerCase());
      })
    : people;

  useEffect(() => {
    const selectedPerson = filteredPeople[selected];
    setFirst(selectedPerson ? selectedPerson.first : '');
    setLast(selectedPerson ? selectedPerson.last : '');
    setSelectedPerson(selectedPerson);
  }, [selected, filteredPeople.length]);

  const update = () => {
    people[selected] = { first, last };
    setPeople({ people: [...people], selected: selected });
  };

  const create = () => setPeople({ people: [...people, { first, last }], selected: people.length });

  const remove = () => {
    const index = people.indexOf(selectedPerson);
    setPeople({
      people: [...people.slice(0, index), ...people.slice(index + 1)],
      selected: Math.min(selected, filteredPeople.length - 2)
    });
  };

  const select = selected => setPeople({ people, selected });

  return (
    <>
      <style jsx>{`
        * {
          font-family: inherit;
          font-size: inherit;
        }

        input {
          display: block;
          margin: 0 0 0.5em 0;
        }

        select {
          float: left;
          margin: 0 1em 1em 0;
          width: 14em;
        }

        .buttons {
          clear: both;
        }
      `}</style>

      <input placeholder="filter prefix" value={prefix} onChange={event => setPrefix(event.target.value)} />

      <select size={5} value={selected} onChange={event => select(Number(event.target.value))}>
        {filteredPeople.map((person, i) => (
          <option value={i} key={i}>
            {person.last}, {person.first}
          </option>
        ))}
      </select>

      <label>
        <input value={first} placeholder="first" onChange={event => setFirst(event.target.value)} />
      </label>
      <label>
        <input value={last} placeholder="last" onChange={event => setLast(event.target.value)} />
      </label>

      <div className="buttons">
        <button onClick={create} disabled={!first || !last}>
          create
        </button>
        <button onClick={update} disabled={!first || !last || !selectedPerson}>
          update
        </button>
        <button onClick={remove} disabled={!selectedPerson}>
          delete
        </button>
      </div>
    </>
  );
};
