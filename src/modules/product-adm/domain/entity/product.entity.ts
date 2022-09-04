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
  constructor(private _props: ProductProps) {
    super(_props.id);
  }

  get name(): string {
    return this._props.name;
  }

  get description(): string {
    return this._props.description;
  }

  get purchasePrice(): number {
    return this._props.purchasePrice;
  }

  get stock(): number {
    return this._props.stock;
  }

  get createdAt(): Date {
    return this._props.createdAt;
  }

  get updatedAt(): Date {
    return this._props.updatedAt;
  }
}
