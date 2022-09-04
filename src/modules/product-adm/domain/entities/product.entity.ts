import BaseEntity from "../../../@shared/domain/entities/base.entity";
import AggregateRoot from "../../../@shared/domain/entities/aggregate-root.interface";
import Id from "../../../@shared/domain/value-objects/id.value-object";

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
