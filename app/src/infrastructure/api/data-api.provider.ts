import { Data } from '@/type.dt'

interface IDataApiProvider {
  getData(): Promise<Data>
  isLoading: boolean
  reset(): void
}

export class DataApiProvider implements IDataApiProvider {
  private static instance: DataApiProvider | null = null

  private dataPromise: Promise<Data> | null = null
  private cachedData: Data | null = null
  private loading = false

  private constructor() {}

  public static getInstance(): DataApiProvider {
    if (!DataApiProvider.instance) {
      DataApiProvider.instance = new DataApiProvider()
    }
    return DataApiProvider.instance
  }

  async getData(): Promise<Data> {
    if (this.dataPromise) {
      return this.dataPromise
    }

    if (this.cachedData) {
      return this.cachedData
    }

    this.loading = this.dataPromise === null
    this.dataPromise = this.fetchData()

    try {
      const data = await this.dataPromise
      this.cachedData = data
      return data
    } finally {
      this.loading = false
    }
  }

  private async fetchData(): Promise<Data> {
    const res = await fetch('http://localhost:3000/data/data.json')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
  }

  get isLoading(): boolean {
    return this.loading
  }

  reset() {
    this.cachedData = null
    this.dataPromise = null
    this.loading = false
  }
}

// // app/page.tsx
// import { DataApiProvider } from '@/infrastructure/api/data-api.provider';
// import ClientDataView from './ClientDataView';

// export default async function Page() {
//   const provider = DataApiProvider.getInstance();
//   const data = await provider.getData(); // Один запрос на сервер

//   return <ClientDataView initialData={data} isLoading={provider.isLoading} />;
// }
