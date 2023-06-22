import { products} from '@/app/components/getProducts';

export async function generateMetadata({ params }: {params: {id: string}} ) {
    
    const product = products.find((product) => product.name === params.id.replaceAll('%20', ' '));
    return {
      title: product?.name,
      description: product?.Description.About,
    }
  }

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }