export type FeatureType = { id: number; icon: any };
interface FeaturesData {
  [keys: string]: FeatureType[];
}
import CheckCircle from "@/assets/icons/CheckCircle.svg";
const featuresData: FeaturesData = {
  tech: [
    { id: 1, icon: CheckCircle },
    { id: 2, icon: CheckCircle },
    { id: 3, icon: CheckCircle },
    { id: 4, icon: CheckCircle },
    { id: 5, icon: CheckCircle },
    { id: 6, icon: CheckCircle },
  ],
  business: [
    { id: 1, icon: CheckCircle },
    { id: 2, icon: CheckCircle },
    { id: 3, icon: CheckCircle },
    { id: 4, icon: CheckCircle },
    { id: 5, icon: CheckCircle },
    { id: 6, icon: CheckCircle },
  ],
  media: [
    { id: 1, icon: CheckCircle },
    { id: 2, icon: CheckCircle },
    { id: 3, icon: CheckCircle },
    { id: 4, icon: CheckCircle },
    { id: 5, icon: CheckCircle },
    { id: 6, icon: CheckCircle },
  ],
};

export default featuresData;
