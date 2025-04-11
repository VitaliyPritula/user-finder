interface Props {
    name: string;
    company: string;
    city: string;
    onFilterChange: (filters: { name: string; company: string; city: string }) => void;
    companyOptions: string[];
    cityOptions: string[];
  }
  
  export default function Filters({ name, company, city, onFilterChange, companyOptions, cityOptions }: Props) {
    return (
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          value={name}
          placeholder="Search by name"
          className="border p-2 rounded"
          onChange={(e) => onFilterChange({ name: e.target.value, company, city })}
        />
  
        <select
          className="border p-2 rounded"
          value={company}
          onChange={(e) => onFilterChange({ name, company: e.target.value, city })}
        >
          <option value="">All Companies</option>
          {companyOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
  
        <select
          className="border p-2 rounded"
          value={city}
          onChange={(e) => onFilterChange({ name, company, city: e.target.value })}
        >
          <option value="">All Cities</option>
          {cityOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    );
  }
  