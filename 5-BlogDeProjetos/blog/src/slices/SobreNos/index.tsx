import { Content } from "@prismicio/client";
import { JSXFunctionSerializer, JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";


const components: JSXMapSerializer = {
  heading1: ({children}) => (
    <Heading
      as="h1"
      size="md"
      className="text-center mb-12">
        {children}
      </Heading>
  )
}


/**
 * Props for `SobreNos`.
 */
export type SobreNosProps = SliceComponentProps<Content.SobreNosSlice>;

/**
 * Component for "SobreNos" Slices.
 */
const SobreNos = ({ slice }: SobreNosProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    > 
      <PrismicRichText components={components} field={slice.primary.titulo} />
      <PrismicRichText components={components} field={slice.primary.subt} />
    </Bounded>
  );
};

export default SobreNos;
