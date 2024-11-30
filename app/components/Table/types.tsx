export default interface TableProps {
	data: Response[];
	loading: boolean;
	page: number;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	setData: React.Dispatch<React.SetStateAction<any[]>>;
}