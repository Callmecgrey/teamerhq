export function generateStaticParams() {
    return [
      { type: 'video' },
      { type: 'voice' }
    ];
  }
  
  export default function CallLayout({ children }: { children: React.ReactNode }) {
    return children;
  }