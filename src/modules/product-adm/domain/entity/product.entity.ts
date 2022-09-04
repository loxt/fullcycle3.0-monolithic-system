import BaseEntity from "../../../@shared/domain/entity/base.entity";
import AggregateRoot from "../../../@shared/domain/entity/aggregate-root.interface";
import Id from "../../../@shared/domain/value-object/id.value-object";

type ProductProps = {
  readonly id?: Id;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  readonly createdAt?: Date;
  updatedAt?: Date;
};

export default class Product extends BaseEntity implements AggregateRoot {
  constructor(private props: ProductProps) {
    super(props.id);
  }
}
