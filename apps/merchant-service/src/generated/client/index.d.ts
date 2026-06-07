
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model VirtualAccount
 * 
 */
export type VirtualAccount = $Result.DefaultSelection<Prisma.$VirtualAccountPayload>
/**
 * Model QrCode
 * 
 */
export type QrCode = $Result.DefaultSelection<Prisma.$QrCodePayload>
/**
 * Model PaymentLink
 * 
 */
export type PaymentLink = $Result.DefaultSelection<Prisma.$PaymentLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KycLevel: {
  TIER_1: 'TIER_1',
  TIER_2: 'TIER_2',
  TIER_3: 'TIER_3'
};

export type KycLevel = (typeof KycLevel)[keyof typeof KycLevel]


export const KycStatus: {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const BusinessType: {
  SOLE_PROPRIETORSHIP: 'SOLE_PROPRIETORSHIP',
  REGISTERED_COMPANY: 'REGISTERED_COMPANY',
  INDIVIDUAL_TRADER: 'INDIVIDUAL_TRADER'
};

export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType]


export const MerchantStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  ACTIVE: 'ACTIVE',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED'
};

export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus]


export const QrType: {
  STATIC: 'STATIC',
  DYNAMIC: 'DYNAMIC'
};

export type QrType = (typeof QrType)[keyof typeof QrType]

}

export type KycLevel = $Enums.KycLevel

export const KycLevel: typeof $Enums.KycLevel

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type BusinessType = $Enums.BusinessType

export const BusinessType: typeof $Enums.BusinessType

export type MerchantStatus = $Enums.MerchantStatus

export const MerchantStatus: typeof $Enums.MerchantStatus

export type QrType = $Enums.QrType

export const QrType: typeof $Enums.QrType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Merchants
 * const merchants = await prisma.merchant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Merchants
   * const merchants = await prisma.merchant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs>;

  /**
   * `prisma.virtualAccount`: Exposes CRUD operations for the **VirtualAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualAccounts
    * const virtualAccounts = await prisma.virtualAccount.findMany()
    * ```
    */
  get virtualAccount(): Prisma.VirtualAccountDelegate<ExtArgs>;

  /**
   * `prisma.qrCode`: Exposes CRUD operations for the **QrCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QrCodes
    * const qrCodes = await prisma.qrCode.findMany()
    * ```
    */
  get qrCode(): Prisma.QrCodeDelegate<ExtArgs>;

  /**
   * `prisma.paymentLink`: Exposes CRUD operations for the **PaymentLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentLinks
    * const paymentLinks = await prisma.paymentLink.findMany()
    * ```
    */
  get paymentLink(): Prisma.PaymentLinkDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Merchant: 'Merchant',
    VirtualAccount: 'VirtualAccount',
    QrCode: 'QrCode',
    PaymentLink: 'PaymentLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "merchant" | "virtualAccount" | "qrCode" | "paymentLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      VirtualAccount: {
        payload: Prisma.$VirtualAccountPayload<ExtArgs>
        fields: Prisma.VirtualAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          findFirst: {
            args: Prisma.VirtualAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          findMany: {
            args: Prisma.VirtualAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>[]
          }
          create: {
            args: Prisma.VirtualAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          createMany: {
            args: Prisma.VirtualAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VirtualAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>[]
          }
          delete: {
            args: Prisma.VirtualAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          update: {
            args: Prisma.VirtualAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          deleteMany: {
            args: Prisma.VirtualAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VirtualAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualAccountPayload>
          }
          aggregate: {
            args: Prisma.VirtualAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualAccount>
          }
          groupBy: {
            args: Prisma.VirtualAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualAccountCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualAccountCountAggregateOutputType> | number
          }
        }
      }
      QrCode: {
        payload: Prisma.$QrCodePayload<ExtArgs>
        fields: Prisma.QrCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QrCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QrCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          findFirst: {
            args: Prisma.QrCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QrCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          findMany: {
            args: Prisma.QrCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>[]
          }
          create: {
            args: Prisma.QrCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          createMany: {
            args: Prisma.QrCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QrCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>[]
          }
          delete: {
            args: Prisma.QrCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          update: {
            args: Prisma.QrCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          deleteMany: {
            args: Prisma.QrCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QrCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QrCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          aggregate: {
            args: Prisma.QrCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQrCode>
          }
          groupBy: {
            args: Prisma.QrCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QrCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QrCodeCountAggregateOutputType> | number
          }
        }
      }
      PaymentLink: {
        payload: Prisma.$PaymentLinkPayload<ExtArgs>
        fields: Prisma.PaymentLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          findFirst: {
            args: Prisma.PaymentLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          findMany: {
            args: Prisma.PaymentLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>[]
          }
          create: {
            args: Prisma.PaymentLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          createMany: {
            args: Prisma.PaymentLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>[]
          }
          delete: {
            args: Prisma.PaymentLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          update: {
            args: Prisma.PaymentLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          deleteMany: {
            args: Prisma.PaymentLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLinkPayload>
          }
          aggregate: {
            args: Prisma.PaymentLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentLink>
          }
          groupBy: {
            args: Prisma.PaymentLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentLinkCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    qrCodes: number
    paymentLinks: number
    virtualAccounts: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | MerchantCountOutputTypeCountQrCodesArgs
    paymentLinks?: boolean | MerchantCountOutputTypeCountPaymentLinksArgs
    virtualAccounts?: boolean | MerchantCountOutputTypeCountVirtualAccountsArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrCodeWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountPaymentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLinkWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountVirtualAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bvn: string | null
    nin: string | null
    cacNumber: string | null
    tin: string | null
    kycLevel: $Enums.KycLevel | null
    kycStatus: $Enums.KycStatus | null
    rejectionReason: string | null
    nibssId: string | null
    pagaReference: string | null
    paystackSubaccountCode: string | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    description: string | null
    ownerName: string | null
    ownerDob: Date | null
    email: string | null
    mobile: string | null
    addressLine1: string | null
    addressLine2: string | null
    addressCity: string | null
    addressState: string | null
    addressZip: string | null
    addressCountry: string | null
    bankCode: string | null
    accountNumber: string | null
    accountName: string | null
    status: $Enums.MerchantStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bvn: string | null
    nin: string | null
    cacNumber: string | null
    tin: string | null
    kycLevel: $Enums.KycLevel | null
    kycStatus: $Enums.KycStatus | null
    rejectionReason: string | null
    nibssId: string | null
    pagaReference: string | null
    paystackSubaccountCode: string | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    description: string | null
    ownerName: string | null
    ownerDob: Date | null
    email: string | null
    mobile: string | null
    addressLine1: string | null
    addressLine2: string | null
    addressCity: string | null
    addressState: string | null
    addressZip: string | null
    addressCountry: string | null
    bankCode: string | null
    accountNumber: string | null
    accountName: string | null
    status: $Enums.MerchantStatus | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    userId: number
    bvn: number
    nin: number
    cacNumber: number
    tin: number
    kycLevel: number
    kycStatus: number
    rejectionReason: number
    nibssId: number
    pagaReference: number
    paystackSubaccountCode: number
    businessName: number
    businessType: number
    description: number
    ownerName: number
    ownerDob: number
    email: number
    mobile: number
    addressLine1: number
    addressLine2: number
    addressCity: number
    addressState: number
    addressZip: number
    addressCountry: number
    bankCode: number
    accountNumber: number
    accountName: number
    status: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MerchantMinAggregateInputType = {
    id?: true
    userId?: true
    bvn?: true
    nin?: true
    cacNumber?: true
    tin?: true
    kycLevel?: true
    kycStatus?: true
    rejectionReason?: true
    nibssId?: true
    pagaReference?: true
    paystackSubaccountCode?: true
    businessName?: true
    businessType?: true
    description?: true
    ownerName?: true
    ownerDob?: true
    email?: true
    mobile?: true
    addressLine1?: true
    addressLine2?: true
    addressCity?: true
    addressState?: true
    addressZip?: true
    addressCountry?: true
    bankCode?: true
    accountNumber?: true
    accountName?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    userId?: true
    bvn?: true
    nin?: true
    cacNumber?: true
    tin?: true
    kycLevel?: true
    kycStatus?: true
    rejectionReason?: true
    nibssId?: true
    pagaReference?: true
    paystackSubaccountCode?: true
    businessName?: true
    businessType?: true
    description?: true
    ownerName?: true
    ownerDob?: true
    email?: true
    mobile?: true
    addressLine1?: true
    addressLine2?: true
    addressCity?: true
    addressState?: true
    addressZip?: true
    addressCountry?: true
    bankCode?: true
    accountNumber?: true
    accountName?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    userId?: true
    bvn?: true
    nin?: true
    cacNumber?: true
    tin?: true
    kycLevel?: true
    kycStatus?: true
    rejectionReason?: true
    nibssId?: true
    pagaReference?: true
    paystackSubaccountCode?: true
    businessName?: true
    businessType?: true
    description?: true
    ownerName?: true
    ownerDob?: true
    email?: true
    mobile?: true
    addressLine1?: true
    addressLine2?: true
    addressCity?: true
    addressState?: true
    addressZip?: true
    addressCountry?: true
    bankCode?: true
    accountNumber?: true
    accountName?: true
    status?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: string
    userId: string
    bvn: string | null
    nin: string | null
    cacNumber: string | null
    tin: string | null
    kycLevel: $Enums.KycLevel
    kycStatus: $Enums.KycStatus
    rejectionReason: string | null
    nibssId: string | null
    pagaReference: string | null
    paystackSubaccountCode: string | null
    businessName: string
    businessType: $Enums.BusinessType
    description: string | null
    ownerName: string
    ownerDob: Date | null
    email: string
    mobile: string
    addressLine1: string
    addressLine2: string | null
    addressCity: string
    addressState: string
    addressZip: string | null
    addressCountry: string
    bankCode: string
    accountNumber: string
    accountName: string
    status: $Enums.MerchantStatus
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bvn?: boolean
    nin?: boolean
    cacNumber?: boolean
    tin?: boolean
    kycLevel?: boolean
    kycStatus?: boolean
    rejectionReason?: boolean
    nibssId?: boolean
    pagaReference?: boolean
    paystackSubaccountCode?: boolean
    businessName?: boolean
    businessType?: boolean
    description?: boolean
    ownerName?: boolean
    ownerDob?: boolean
    email?: boolean
    mobile?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZip?: boolean
    addressCountry?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodes?: boolean | Merchant$qrCodesArgs<ExtArgs>
    paymentLinks?: boolean | Merchant$paymentLinksArgs<ExtArgs>
    virtualAccounts?: boolean | Merchant$virtualAccountsArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bvn?: boolean
    nin?: boolean
    cacNumber?: boolean
    tin?: boolean
    kycLevel?: boolean
    kycStatus?: boolean
    rejectionReason?: boolean
    nibssId?: boolean
    pagaReference?: boolean
    paystackSubaccountCode?: boolean
    businessName?: boolean
    businessType?: boolean
    description?: boolean
    ownerName?: boolean
    ownerDob?: boolean
    email?: boolean
    mobile?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZip?: boolean
    addressCountry?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    userId?: boolean
    bvn?: boolean
    nin?: boolean
    cacNumber?: boolean
    tin?: boolean
    kycLevel?: boolean
    kycStatus?: boolean
    rejectionReason?: boolean
    nibssId?: boolean
    pagaReference?: boolean
    paystackSubaccountCode?: boolean
    businessName?: boolean
    businessType?: boolean
    description?: boolean
    ownerName?: boolean
    ownerDob?: boolean
    email?: boolean
    mobile?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZip?: boolean
    addressCountry?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    status?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | Merchant$qrCodesArgs<ExtArgs>
    paymentLinks?: boolean | Merchant$paymentLinksArgs<ExtArgs>
    virtualAccounts?: boolean | Merchant$virtualAccountsArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      qrCodes: Prisma.$QrCodePayload<ExtArgs>[]
      paymentLinks: Prisma.$PaymentLinkPayload<ExtArgs>[]
      virtualAccounts: Prisma.$VirtualAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bvn: string | null
      nin: string | null
      cacNumber: string | null
      tin: string | null
      kycLevel: $Enums.KycLevel
      kycStatus: $Enums.KycStatus
      rejectionReason: string | null
      nibssId: string | null
      pagaReference: string | null
      paystackSubaccountCode: string | null
      businessName: string
      businessType: $Enums.BusinessType
      description: string | null
      ownerName: string
      ownerDob: Date | null
      email: string
      mobile: string
      addressLine1: string
      addressLine2: string | null
      addressCity: string
      addressState: string
      addressZip: string | null
      addressCountry: string
      bankCode: string
      accountNumber: string
      accountName: string
      status: $Enums.MerchantStatus
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCodes<T extends Merchant$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findMany"> | Null>
    paymentLinks<T extends Merchant$paymentLinksArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$paymentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findMany"> | Null>
    virtualAccounts<T extends Merchant$virtualAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$virtualAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Merchant model
   */ 
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'String'>
    readonly userId: FieldRef<"Merchant", 'String'>
    readonly bvn: FieldRef<"Merchant", 'String'>
    readonly nin: FieldRef<"Merchant", 'String'>
    readonly cacNumber: FieldRef<"Merchant", 'String'>
    readonly tin: FieldRef<"Merchant", 'String'>
    readonly kycLevel: FieldRef<"Merchant", 'KycLevel'>
    readonly kycStatus: FieldRef<"Merchant", 'KycStatus'>
    readonly rejectionReason: FieldRef<"Merchant", 'String'>
    readonly nibssId: FieldRef<"Merchant", 'String'>
    readonly pagaReference: FieldRef<"Merchant", 'String'>
    readonly paystackSubaccountCode: FieldRef<"Merchant", 'String'>
    readonly businessName: FieldRef<"Merchant", 'String'>
    readonly businessType: FieldRef<"Merchant", 'BusinessType'>
    readonly description: FieldRef<"Merchant", 'String'>
    readonly ownerName: FieldRef<"Merchant", 'String'>
    readonly ownerDob: FieldRef<"Merchant", 'DateTime'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly mobile: FieldRef<"Merchant", 'String'>
    readonly addressLine1: FieldRef<"Merchant", 'String'>
    readonly addressLine2: FieldRef<"Merchant", 'String'>
    readonly addressCity: FieldRef<"Merchant", 'String'>
    readonly addressState: FieldRef<"Merchant", 'String'>
    readonly addressZip: FieldRef<"Merchant", 'String'>
    readonly addressCountry: FieldRef<"Merchant", 'String'>
    readonly bankCode: FieldRef<"Merchant", 'String'>
    readonly accountNumber: FieldRef<"Merchant", 'String'>
    readonly accountName: FieldRef<"Merchant", 'String'>
    readonly status: FieldRef<"Merchant", 'MerchantStatus'>
    readonly isActive: FieldRef<"Merchant", 'Boolean'>
    readonly createdAt: FieldRef<"Merchant", 'DateTime'>
    readonly updatedAt: FieldRef<"Merchant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
  }

  /**
   * Merchant.qrCodes
   */
  export type Merchant$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    where?: QrCodeWhereInput
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    cursor?: QrCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * Merchant.paymentLinks
   */
  export type Merchant$paymentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    where?: PaymentLinkWhereInput
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    cursor?: PaymentLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * Merchant.virtualAccounts
   */
  export type Merchant$virtualAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    where?: VirtualAccountWhereInput
    orderBy?: VirtualAccountOrderByWithRelationInput | VirtualAccountOrderByWithRelationInput[]
    cursor?: VirtualAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[]
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model VirtualAccount
   */

  export type AggregateVirtualAccount = {
    _count: VirtualAccountCountAggregateOutputType | null
    _min: VirtualAccountMinAggregateOutputType | null
    _max: VirtualAccountMaxAggregateOutputType | null
  }

  export type VirtualAccountMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    bankName: string | null
    accountNumber: string | null
    accountName: string | null
    createdAt: Date | null
  }

  export type VirtualAccountMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    bankName: string | null
    accountNumber: string | null
    accountName: string | null
    createdAt: Date | null
  }

  export type VirtualAccountCountAggregateOutputType = {
    id: number
    merchantId: number
    bankName: number
    accountNumber: number
    accountName: number
    createdAt: number
    _all: number
  }


  export type VirtualAccountMinAggregateInputType = {
    id?: true
    merchantId?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
  }

  export type VirtualAccountMaxAggregateInputType = {
    id?: true
    merchantId?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
  }

  export type VirtualAccountCountAggregateInputType = {
    id?: true
    merchantId?: true
    bankName?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
    _all?: true
  }

  export type VirtualAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAccount to aggregate.
     */
    where?: VirtualAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?: VirtualAccountOrderByWithRelationInput | VirtualAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualAccounts
    **/
    _count?: true | VirtualAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualAccountMaxAggregateInputType
  }

  export type GetVirtualAccountAggregateType<T extends VirtualAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualAccount[P]>
      : GetScalarType<T[P], AggregateVirtualAccount[P]>
  }




  export type VirtualAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualAccountWhereInput
    orderBy?: VirtualAccountOrderByWithAggregationInput | VirtualAccountOrderByWithAggregationInput[]
    by: VirtualAccountScalarFieldEnum[] | VirtualAccountScalarFieldEnum
    having?: VirtualAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualAccountCountAggregateInputType | true
    _min?: VirtualAccountMinAggregateInputType
    _max?: VirtualAccountMaxAggregateInputType
  }

  export type VirtualAccountGroupByOutputType = {
    id: string
    merchantId: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt: Date
    _count: VirtualAccountCountAggregateOutputType | null
    _min: VirtualAccountMinAggregateOutputType | null
    _max: VirtualAccountMaxAggregateOutputType | null
  }

  type GetVirtualAccountGroupByPayload<T extends VirtualAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualAccountGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualAccountGroupByOutputType[P]>
        }
      >
    >


  export type VirtualAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAccount"]>

  export type VirtualAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualAccount"]>

  export type VirtualAccountSelectScalar = {
    id?: boolean
    merchantId?: boolean
    bankName?: boolean
    accountNumber?: boolean
    accountName?: boolean
    createdAt?: boolean
  }

  export type VirtualAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type VirtualAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $VirtualAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualAccount"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      bankName: string
      accountNumber: string
      accountName: string
      createdAt: Date
    }, ExtArgs["result"]["virtualAccount"]>
    composites: {}
  }

  type VirtualAccountGetPayload<S extends boolean | null | undefined | VirtualAccountDefaultArgs> = $Result.GetResult<Prisma.$VirtualAccountPayload, S>

  type VirtualAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VirtualAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VirtualAccountCountAggregateInputType | true
    }

  export interface VirtualAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualAccount'], meta: { name: 'VirtualAccount' } }
    /**
     * Find zero or one VirtualAccount that matches the filter.
     * @param {VirtualAccountFindUniqueArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualAccountFindUniqueArgs>(args: SelectSubset<T, VirtualAccountFindUniqueArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VirtualAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VirtualAccountFindUniqueOrThrowArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VirtualAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindFirstArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualAccountFindFirstArgs>(args?: SelectSubset<T, VirtualAccountFindFirstArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VirtualAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindFirstOrThrowArgs} args - Arguments to find a VirtualAccount
     * @example
     * // Get one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VirtualAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualAccounts
     * const virtualAccounts = await prisma.virtualAccount.findMany()
     * 
     * // Get first 10 VirtualAccounts
     * const virtualAccounts = await prisma.virtualAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const virtualAccountWithIdOnly = await prisma.virtualAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VirtualAccountFindManyArgs>(args?: SelectSubset<T, VirtualAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VirtualAccount.
     * @param {VirtualAccountCreateArgs} args - Arguments to create a VirtualAccount.
     * @example
     * // Create one VirtualAccount
     * const VirtualAccount = await prisma.virtualAccount.create({
     *   data: {
     *     // ... data to create a VirtualAccount
     *   }
     * })
     * 
     */
    create<T extends VirtualAccountCreateArgs>(args: SelectSubset<T, VirtualAccountCreateArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VirtualAccounts.
     * @param {VirtualAccountCreateManyArgs} args - Arguments to create many VirtualAccounts.
     * @example
     * // Create many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualAccountCreateManyArgs>(args?: SelectSubset<T, VirtualAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VirtualAccounts and returns the data saved in the database.
     * @param {VirtualAccountCreateManyAndReturnArgs} args - Arguments to create many VirtualAccounts.
     * @example
     * // Create many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VirtualAccounts and only return the `id`
     * const virtualAccountWithIdOnly = await prisma.virtualAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VirtualAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, VirtualAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VirtualAccount.
     * @param {VirtualAccountDeleteArgs} args - Arguments to delete one VirtualAccount.
     * @example
     * // Delete one VirtualAccount
     * const VirtualAccount = await prisma.virtualAccount.delete({
     *   where: {
     *     // ... filter to delete one VirtualAccount
     *   }
     * })
     * 
     */
    delete<T extends VirtualAccountDeleteArgs>(args: SelectSubset<T, VirtualAccountDeleteArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VirtualAccount.
     * @param {VirtualAccountUpdateArgs} args - Arguments to update one VirtualAccount.
     * @example
     * // Update one VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualAccountUpdateArgs>(args: SelectSubset<T, VirtualAccountUpdateArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VirtualAccounts.
     * @param {VirtualAccountDeleteManyArgs} args - Arguments to filter VirtualAccounts to delete.
     * @example
     * // Delete a few VirtualAccounts
     * const { count } = await prisma.virtualAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualAccountDeleteManyArgs>(args?: SelectSubset<T, VirtualAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualAccounts
     * const virtualAccount = await prisma.virtualAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualAccountUpdateManyArgs>(args: SelectSubset<T, VirtualAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VirtualAccount.
     * @param {VirtualAccountUpsertArgs} args - Arguments to update or create a VirtualAccount.
     * @example
     * // Update or create a VirtualAccount
     * const virtualAccount = await prisma.virtualAccount.upsert({
     *   create: {
     *     // ... data to create a VirtualAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualAccount we want to update
     *   }
     * })
     */
    upsert<T extends VirtualAccountUpsertArgs>(args: SelectSubset<T, VirtualAccountUpsertArgs<ExtArgs>>): Prisma__VirtualAccountClient<$Result.GetResult<Prisma.$VirtualAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VirtualAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountCountArgs} args - Arguments to filter VirtualAccounts to count.
     * @example
     * // Count the number of VirtualAccounts
     * const count = await prisma.virtualAccount.count({
     *   where: {
     *     // ... the filter for the VirtualAccounts we want to count
     *   }
     * })
    **/
    count<T extends VirtualAccountCountArgs>(
      args?: Subset<T, VirtualAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualAccountAggregateArgs>(args: Subset<T, VirtualAccountAggregateArgs>): Prisma.PrismaPromise<GetVirtualAccountAggregateType<T>>

    /**
     * Group by VirtualAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualAccountGroupByArgs['orderBy'] }
        : { orderBy?: VirtualAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualAccount model
   */
  readonly fields: VirtualAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualAccount model
   */ 
  interface VirtualAccountFieldRefs {
    readonly id: FieldRef<"VirtualAccount", 'String'>
    readonly merchantId: FieldRef<"VirtualAccount", 'String'>
    readonly bankName: FieldRef<"VirtualAccount", 'String'>
    readonly accountNumber: FieldRef<"VirtualAccount", 'String'>
    readonly accountName: FieldRef<"VirtualAccount", 'String'>
    readonly createdAt: FieldRef<"VirtualAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VirtualAccount findUnique
   */
  export type VirtualAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where: VirtualAccountWhereUniqueInput
  }

  /**
   * VirtualAccount findUniqueOrThrow
   */
  export type VirtualAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where: VirtualAccountWhereUniqueInput
  }

  /**
   * VirtualAccount findFirst
   */
  export type VirtualAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where?: VirtualAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?: VirtualAccountOrderByWithRelationInput | VirtualAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAccounts.
     */
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[]
  }

  /**
   * VirtualAccount findFirstOrThrow
   */
  export type VirtualAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAccount to fetch.
     */
    where?: VirtualAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?: VirtualAccountOrderByWithRelationInput | VirtualAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualAccounts.
     */
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[]
  }

  /**
   * VirtualAccount findMany
   */
  export type VirtualAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter, which VirtualAccounts to fetch.
     */
    where?: VirtualAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualAccounts to fetch.
     */
    orderBy?: VirtualAccountOrderByWithRelationInput | VirtualAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualAccounts.
     */
    cursor?: VirtualAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualAccounts.
     */
    skip?: number
    distinct?: VirtualAccountScalarFieldEnum | VirtualAccountScalarFieldEnum[]
  }

  /**
   * VirtualAccount create
   */
  export type VirtualAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualAccount.
     */
    data: XOR<VirtualAccountCreateInput, VirtualAccountUncheckedCreateInput>
  }

  /**
   * VirtualAccount createMany
   */
  export type VirtualAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualAccounts.
     */
    data: VirtualAccountCreateManyInput | VirtualAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualAccount createManyAndReturn
   */
  export type VirtualAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VirtualAccounts.
     */
    data: VirtualAccountCreateManyInput | VirtualAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualAccount update
   */
  export type VirtualAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualAccount.
     */
    data: XOR<VirtualAccountUpdateInput, VirtualAccountUncheckedUpdateInput>
    /**
     * Choose, which VirtualAccount to update.
     */
    where: VirtualAccountWhereUniqueInput
  }

  /**
   * VirtualAccount updateMany
   */
  export type VirtualAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualAccounts.
     */
    data: XOR<VirtualAccountUpdateManyMutationInput, VirtualAccountUncheckedUpdateManyInput>
    /**
     * Filter which VirtualAccounts to update
     */
    where?: VirtualAccountWhereInput
  }

  /**
   * VirtualAccount upsert
   */
  export type VirtualAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualAccount to update in case it exists.
     */
    where: VirtualAccountWhereUniqueInput
    /**
     * In case the VirtualAccount found by the `where` argument doesn't exist, create a new VirtualAccount with this data.
     */
    create: XOR<VirtualAccountCreateInput, VirtualAccountUncheckedCreateInput>
    /**
     * In case the VirtualAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualAccountUpdateInput, VirtualAccountUncheckedUpdateInput>
  }

  /**
   * VirtualAccount delete
   */
  export type VirtualAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
    /**
     * Filter which VirtualAccount to delete.
     */
    where: VirtualAccountWhereUniqueInput
  }

  /**
   * VirtualAccount deleteMany
   */
  export type VirtualAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualAccounts to delete
     */
    where?: VirtualAccountWhereInput
  }

  /**
   * VirtualAccount without action
   */
  export type VirtualAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualAccount
     */
    select?: VirtualAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualAccountInclude<ExtArgs> | null
  }


  /**
   * Model QrCode
   */

  export type AggregateQrCode = {
    _count: QrCodeCountAggregateOutputType | null
    _avg: QrCodeAvgAggregateOutputType | null
    _sum: QrCodeSumAggregateOutputType | null
    _min: QrCodeMinAggregateOutputType | null
    _max: QrCodeMaxAggregateOutputType | null
  }

  export type QrCodeAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type QrCodeSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type QrCodeMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    type: $Enums.QrType | null
    nibssQrData: string | null
    qrImageUrl: string | null
    amount: Decimal | null
    reference: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type QrCodeMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    type: $Enums.QrType | null
    nibssQrData: string | null
    qrImageUrl: string | null
    amount: Decimal | null
    reference: string | null
    isActive: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type QrCodeCountAggregateOutputType = {
    id: number
    merchantId: number
    type: number
    nibssQrData: number
    qrImageUrl: number
    amount: number
    reference: number
    isActive: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type QrCodeAvgAggregateInputType = {
    amount?: true
  }

  export type QrCodeSumAggregateInputType = {
    amount?: true
  }

  export type QrCodeMinAggregateInputType = {
    id?: true
    merchantId?: true
    type?: true
    nibssQrData?: true
    qrImageUrl?: true
    amount?: true
    reference?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
  }

  export type QrCodeMaxAggregateInputType = {
    id?: true
    merchantId?: true
    type?: true
    nibssQrData?: true
    qrImageUrl?: true
    amount?: true
    reference?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
  }

  export type QrCodeCountAggregateInputType = {
    id?: true
    merchantId?: true
    type?: true
    nibssQrData?: true
    qrImageUrl?: true
    amount?: true
    reference?: true
    isActive?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type QrCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrCode to aggregate.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QrCodes
    **/
    _count?: true | QrCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QrCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QrCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrCodeMaxAggregateInputType
  }

  export type GetQrCodeAggregateType<T extends QrCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQrCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQrCode[P]>
      : GetScalarType<T[P], AggregateQrCode[P]>
  }




  export type QrCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrCodeWhereInput
    orderBy?: QrCodeOrderByWithAggregationInput | QrCodeOrderByWithAggregationInput[]
    by: QrCodeScalarFieldEnum[] | QrCodeScalarFieldEnum
    having?: QrCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrCodeCountAggregateInputType | true
    _avg?: QrCodeAvgAggregateInputType
    _sum?: QrCodeSumAggregateInputType
    _min?: QrCodeMinAggregateInputType
    _max?: QrCodeMaxAggregateInputType
  }

  export type QrCodeGroupByOutputType = {
    id: string
    merchantId: string
    type: $Enums.QrType
    nibssQrData: string | null
    qrImageUrl: string | null
    amount: Decimal | null
    reference: string
    isActive: boolean
    createdAt: Date
    expiresAt: Date | null
    _count: QrCodeCountAggregateOutputType | null
    _avg: QrCodeAvgAggregateOutputType | null
    _sum: QrCodeSumAggregateOutputType | null
    _min: QrCodeMinAggregateOutputType | null
    _max: QrCodeMaxAggregateOutputType | null
  }

  type GetQrCodeGroupByPayload<T extends QrCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QrCodeGroupByOutputType[P]>
        }
      >
    >


  export type QrCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    type?: boolean
    nibssQrData?: boolean
    qrImageUrl?: boolean
    amount?: boolean
    reference?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrCode"]>

  export type QrCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    type?: boolean
    nibssQrData?: boolean
    qrImageUrl?: boolean
    amount?: boolean
    reference?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrCode"]>

  export type QrCodeSelectScalar = {
    id?: boolean
    merchantId?: boolean
    type?: boolean
    nibssQrData?: boolean
    qrImageUrl?: boolean
    amount?: boolean
    reference?: boolean
    isActive?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type QrCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type QrCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $QrCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QrCode"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      type: $Enums.QrType
      nibssQrData: string | null
      qrImageUrl: string | null
      amount: Prisma.Decimal | null
      reference: string
      isActive: boolean
      createdAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["qrCode"]>
    composites: {}
  }

  type QrCodeGetPayload<S extends boolean | null | undefined | QrCodeDefaultArgs> = $Result.GetResult<Prisma.$QrCodePayload, S>

  type QrCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QrCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QrCodeCountAggregateInputType | true
    }

  export interface QrCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QrCode'], meta: { name: 'QrCode' } }
    /**
     * Find zero or one QrCode that matches the filter.
     * @param {QrCodeFindUniqueArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QrCodeFindUniqueArgs>(args: SelectSubset<T, QrCodeFindUniqueArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QrCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QrCodeFindUniqueOrThrowArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QrCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QrCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QrCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindFirstArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QrCodeFindFirstArgs>(args?: SelectSubset<T, QrCodeFindFirstArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QrCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindFirstOrThrowArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QrCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QrCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QrCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QrCodes
     * const qrCodes = await prisma.qrCode.findMany()
     * 
     * // Get first 10 QrCodes
     * const qrCodes = await prisma.qrCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qrCodeWithIdOnly = await prisma.qrCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QrCodeFindManyArgs>(args?: SelectSubset<T, QrCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QrCode.
     * @param {QrCodeCreateArgs} args - Arguments to create a QrCode.
     * @example
     * // Create one QrCode
     * const QrCode = await prisma.qrCode.create({
     *   data: {
     *     // ... data to create a QrCode
     *   }
     * })
     * 
     */
    create<T extends QrCodeCreateArgs>(args: SelectSubset<T, QrCodeCreateArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QrCodes.
     * @param {QrCodeCreateManyArgs} args - Arguments to create many QrCodes.
     * @example
     * // Create many QrCodes
     * const qrCode = await prisma.qrCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QrCodeCreateManyArgs>(args?: SelectSubset<T, QrCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QrCodes and returns the data saved in the database.
     * @param {QrCodeCreateManyAndReturnArgs} args - Arguments to create many QrCodes.
     * @example
     * // Create many QrCodes
     * const qrCode = await prisma.qrCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QrCodes and only return the `id`
     * const qrCodeWithIdOnly = await prisma.qrCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QrCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, QrCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QrCode.
     * @param {QrCodeDeleteArgs} args - Arguments to delete one QrCode.
     * @example
     * // Delete one QrCode
     * const QrCode = await prisma.qrCode.delete({
     *   where: {
     *     // ... filter to delete one QrCode
     *   }
     * })
     * 
     */
    delete<T extends QrCodeDeleteArgs>(args: SelectSubset<T, QrCodeDeleteArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QrCode.
     * @param {QrCodeUpdateArgs} args - Arguments to update one QrCode.
     * @example
     * // Update one QrCode
     * const qrCode = await prisma.qrCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QrCodeUpdateArgs>(args: SelectSubset<T, QrCodeUpdateArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QrCodes.
     * @param {QrCodeDeleteManyArgs} args - Arguments to filter QrCodes to delete.
     * @example
     * // Delete a few QrCodes
     * const { count } = await prisma.qrCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QrCodeDeleteManyArgs>(args?: SelectSubset<T, QrCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QrCodes
     * const qrCode = await prisma.qrCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QrCodeUpdateManyArgs>(args: SelectSubset<T, QrCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QrCode.
     * @param {QrCodeUpsertArgs} args - Arguments to update or create a QrCode.
     * @example
     * // Update or create a QrCode
     * const qrCode = await prisma.qrCode.upsert({
     *   create: {
     *     // ... data to create a QrCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QrCode we want to update
     *   }
     * })
     */
    upsert<T extends QrCodeUpsertArgs>(args: SelectSubset<T, QrCodeUpsertArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeCountArgs} args - Arguments to filter QrCodes to count.
     * @example
     * // Count the number of QrCodes
     * const count = await prisma.qrCode.count({
     *   where: {
     *     // ... the filter for the QrCodes we want to count
     *   }
     * })
    **/
    count<T extends QrCodeCountArgs>(
      args?: Subset<T, QrCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QrCodeAggregateArgs>(args: Subset<T, QrCodeAggregateArgs>): Prisma.PrismaPromise<GetQrCodeAggregateType<T>>

    /**
     * Group by QrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QrCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QrCodeGroupByArgs['orderBy'] }
        : { orderBy?: QrCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QrCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QrCode model
   */
  readonly fields: QrCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QrCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QrCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QrCode model
   */ 
  interface QrCodeFieldRefs {
    readonly id: FieldRef<"QrCode", 'String'>
    readonly merchantId: FieldRef<"QrCode", 'String'>
    readonly type: FieldRef<"QrCode", 'QrType'>
    readonly nibssQrData: FieldRef<"QrCode", 'String'>
    readonly qrImageUrl: FieldRef<"QrCode", 'String'>
    readonly amount: FieldRef<"QrCode", 'Decimal'>
    readonly reference: FieldRef<"QrCode", 'String'>
    readonly isActive: FieldRef<"QrCode", 'Boolean'>
    readonly createdAt: FieldRef<"QrCode", 'DateTime'>
    readonly expiresAt: FieldRef<"QrCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QrCode findUnique
   */
  export type QrCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode findUniqueOrThrow
   */
  export type QrCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode findFirst
   */
  export type QrCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrCodes.
     */
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode findFirstOrThrow
   */
  export type QrCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrCodes.
     */
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode findMany
   */
  export type QrCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCodes to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode create
   */
  export type QrCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QrCode.
     */
    data: XOR<QrCodeCreateInput, QrCodeUncheckedCreateInput>
  }

  /**
   * QrCode createMany
   */
  export type QrCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QrCodes.
     */
    data: QrCodeCreateManyInput | QrCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QrCode createManyAndReturn
   */
  export type QrCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QrCodes.
     */
    data: QrCodeCreateManyInput | QrCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QrCode update
   */
  export type QrCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QrCode.
     */
    data: XOR<QrCodeUpdateInput, QrCodeUncheckedUpdateInput>
    /**
     * Choose, which QrCode to update.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode updateMany
   */
  export type QrCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QrCodes.
     */
    data: XOR<QrCodeUpdateManyMutationInput, QrCodeUncheckedUpdateManyInput>
    /**
     * Filter which QrCodes to update
     */
    where?: QrCodeWhereInput
  }

  /**
   * QrCode upsert
   */
  export type QrCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QrCode to update in case it exists.
     */
    where: QrCodeWhereUniqueInput
    /**
     * In case the QrCode found by the `where` argument doesn't exist, create a new QrCode with this data.
     */
    create: XOR<QrCodeCreateInput, QrCodeUncheckedCreateInput>
    /**
     * In case the QrCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QrCodeUpdateInput, QrCodeUncheckedUpdateInput>
  }

  /**
   * QrCode delete
   */
  export type QrCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter which QrCode to delete.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode deleteMany
   */
  export type QrCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrCodes to delete
     */
    where?: QrCodeWhereInput
  }

  /**
   * QrCode without action
   */
  export type QrCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
  }


  /**
   * Model PaymentLink
   */

  export type AggregatePaymentLink = {
    _count: PaymentLinkCountAggregateOutputType | null
    _avg: PaymentLinkAvgAggregateOutputType | null
    _sum: PaymentLinkSumAggregateOutputType | null
    _min: PaymentLinkMinAggregateOutputType | null
    _max: PaymentLinkMaxAggregateOutputType | null
  }

  export type PaymentLinkAvgAggregateOutputType = {
    amount: Decimal | null
    clicks: number | null
  }

  export type PaymentLinkSumAggregateOutputType = {
    amount: Decimal | null
    clicks: number | null
  }

  export type PaymentLinkMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    url: string | null
    amount: Decimal | null
    description: string | null
    isActive: boolean | null
    clicks: number | null
    createdAt: Date | null
  }

  export type PaymentLinkMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    url: string | null
    amount: Decimal | null
    description: string | null
    isActive: boolean | null
    clicks: number | null
    createdAt: Date | null
  }

  export type PaymentLinkCountAggregateOutputType = {
    id: number
    merchantId: number
    url: number
    amount: number
    description: number
    isActive: number
    clicks: number
    createdAt: number
    _all: number
  }


  export type PaymentLinkAvgAggregateInputType = {
    amount?: true
    clicks?: true
  }

  export type PaymentLinkSumAggregateInputType = {
    amount?: true
    clicks?: true
  }

  export type PaymentLinkMinAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    amount?: true
    description?: true
    isActive?: true
    clicks?: true
    createdAt?: true
  }

  export type PaymentLinkMaxAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    amount?: true
    description?: true
    isActive?: true
    clicks?: true
    createdAt?: true
  }

  export type PaymentLinkCountAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    amount?: true
    description?: true
    isActive?: true
    clicks?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLink to aggregate.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentLinks
    **/
    _count?: true | PaymentLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentLinkMaxAggregateInputType
  }

  export type GetPaymentLinkAggregateType<T extends PaymentLinkAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentLink[P]>
      : GetScalarType<T[P], AggregatePaymentLink[P]>
  }




  export type PaymentLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLinkWhereInput
    orderBy?: PaymentLinkOrderByWithAggregationInput | PaymentLinkOrderByWithAggregationInput[]
    by: PaymentLinkScalarFieldEnum[] | PaymentLinkScalarFieldEnum
    having?: PaymentLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentLinkCountAggregateInputType | true
    _avg?: PaymentLinkAvgAggregateInputType
    _sum?: PaymentLinkSumAggregateInputType
    _min?: PaymentLinkMinAggregateInputType
    _max?: PaymentLinkMaxAggregateInputType
  }

  export type PaymentLinkGroupByOutputType = {
    id: string
    merchantId: string
    url: string
    amount: Decimal | null
    description: string | null
    isActive: boolean
    clicks: number
    createdAt: Date
    _count: PaymentLinkCountAggregateOutputType | null
    _avg: PaymentLinkAvgAggregateOutputType | null
    _sum: PaymentLinkSumAggregateOutputType | null
    _min: PaymentLinkMinAggregateOutputType | null
    _max: PaymentLinkMaxAggregateOutputType | null
  }

  type GetPaymentLinkGroupByPayload<T extends PaymentLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentLinkGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentLinkGroupByOutputType[P]>
        }
      >
    >


  export type PaymentLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    url?: boolean
    amount?: boolean
    description?: boolean
    isActive?: boolean
    clicks?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLink"]>

  export type PaymentLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    url?: boolean
    amount?: boolean
    description?: boolean
    isActive?: boolean
    clicks?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLink"]>

  export type PaymentLinkSelectScalar = {
    id?: boolean
    merchantId?: boolean
    url?: boolean
    amount?: boolean
    description?: boolean
    isActive?: boolean
    clicks?: boolean
    createdAt?: boolean
  }

  export type PaymentLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type PaymentLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $PaymentLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentLink"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      url: string
      amount: Prisma.Decimal | null
      description: string | null
      isActive: boolean
      clicks: number
      createdAt: Date
    }, ExtArgs["result"]["paymentLink"]>
    composites: {}
  }

  type PaymentLinkGetPayload<S extends boolean | null | undefined | PaymentLinkDefaultArgs> = $Result.GetResult<Prisma.$PaymentLinkPayload, S>

  type PaymentLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentLinkCountAggregateInputType | true
    }

  export interface PaymentLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentLink'], meta: { name: 'PaymentLink' } }
    /**
     * Find zero or one PaymentLink that matches the filter.
     * @param {PaymentLinkFindUniqueArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentLinkFindUniqueArgs>(args: SelectSubset<T, PaymentLinkFindUniqueArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentLinkFindUniqueOrThrowArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindFirstArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentLinkFindFirstArgs>(args?: SelectSubset<T, PaymentLinkFindFirstArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindFirstOrThrowArgs} args - Arguments to find a PaymentLink
     * @example
     * // Get one PaymentLink
     * const paymentLink = await prisma.paymentLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentLinks
     * const paymentLinks = await prisma.paymentLink.findMany()
     * 
     * // Get first 10 PaymentLinks
     * const paymentLinks = await prisma.paymentLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentLinkWithIdOnly = await prisma.paymentLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentLinkFindManyArgs>(args?: SelectSubset<T, PaymentLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentLink.
     * @param {PaymentLinkCreateArgs} args - Arguments to create a PaymentLink.
     * @example
     * // Create one PaymentLink
     * const PaymentLink = await prisma.paymentLink.create({
     *   data: {
     *     // ... data to create a PaymentLink
     *   }
     * })
     * 
     */
    create<T extends PaymentLinkCreateArgs>(args: SelectSubset<T, PaymentLinkCreateArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentLinks.
     * @param {PaymentLinkCreateManyArgs} args - Arguments to create many PaymentLinks.
     * @example
     * // Create many PaymentLinks
     * const paymentLink = await prisma.paymentLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentLinkCreateManyArgs>(args?: SelectSubset<T, PaymentLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentLinks and returns the data saved in the database.
     * @param {PaymentLinkCreateManyAndReturnArgs} args - Arguments to create many PaymentLinks.
     * @example
     * // Create many PaymentLinks
     * const paymentLink = await prisma.paymentLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentLinks and only return the `id`
     * const paymentLinkWithIdOnly = await prisma.paymentLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentLink.
     * @param {PaymentLinkDeleteArgs} args - Arguments to delete one PaymentLink.
     * @example
     * // Delete one PaymentLink
     * const PaymentLink = await prisma.paymentLink.delete({
     *   where: {
     *     // ... filter to delete one PaymentLink
     *   }
     * })
     * 
     */
    delete<T extends PaymentLinkDeleteArgs>(args: SelectSubset<T, PaymentLinkDeleteArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentLink.
     * @param {PaymentLinkUpdateArgs} args - Arguments to update one PaymentLink.
     * @example
     * // Update one PaymentLink
     * const paymentLink = await prisma.paymentLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentLinkUpdateArgs>(args: SelectSubset<T, PaymentLinkUpdateArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentLinks.
     * @param {PaymentLinkDeleteManyArgs} args - Arguments to filter PaymentLinks to delete.
     * @example
     * // Delete a few PaymentLinks
     * const { count } = await prisma.paymentLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentLinkDeleteManyArgs>(args?: SelectSubset<T, PaymentLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentLinks
     * const paymentLink = await prisma.paymentLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentLinkUpdateManyArgs>(args: SelectSubset<T, PaymentLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentLink.
     * @param {PaymentLinkUpsertArgs} args - Arguments to update or create a PaymentLink.
     * @example
     * // Update or create a PaymentLink
     * const paymentLink = await prisma.paymentLink.upsert({
     *   create: {
     *     // ... data to create a PaymentLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentLink we want to update
     *   }
     * })
     */
    upsert<T extends PaymentLinkUpsertArgs>(args: SelectSubset<T, PaymentLinkUpsertArgs<ExtArgs>>): Prisma__PaymentLinkClient<$Result.GetResult<Prisma.$PaymentLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkCountArgs} args - Arguments to filter PaymentLinks to count.
     * @example
     * // Count the number of PaymentLinks
     * const count = await prisma.paymentLink.count({
     *   where: {
     *     // ... the filter for the PaymentLinks we want to count
     *   }
     * })
    **/
    count<T extends PaymentLinkCountArgs>(
      args?: Subset<T, PaymentLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentLinkAggregateArgs>(args: Subset<T, PaymentLinkAggregateArgs>): Prisma.PrismaPromise<GetPaymentLinkAggregateType<T>>

    /**
     * Group by PaymentLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentLinkGroupByArgs['orderBy'] }
        : { orderBy?: PaymentLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentLink model
   */
  readonly fields: PaymentLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentLink model
   */ 
  interface PaymentLinkFieldRefs {
    readonly id: FieldRef<"PaymentLink", 'String'>
    readonly merchantId: FieldRef<"PaymentLink", 'String'>
    readonly url: FieldRef<"PaymentLink", 'String'>
    readonly amount: FieldRef<"PaymentLink", 'Decimal'>
    readonly description: FieldRef<"PaymentLink", 'String'>
    readonly isActive: FieldRef<"PaymentLink", 'Boolean'>
    readonly clicks: FieldRef<"PaymentLink", 'Int'>
    readonly createdAt: FieldRef<"PaymentLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentLink findUnique
   */
  export type PaymentLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink findUniqueOrThrow
   */
  export type PaymentLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink findFirst
   */
  export type PaymentLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLinks.
     */
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink findFirstOrThrow
   */
  export type PaymentLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLink to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLinks.
     */
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink findMany
   */
  export type PaymentLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLinks to fetch.
     */
    where?: PaymentLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLinks to fetch.
     */
    orderBy?: PaymentLinkOrderByWithRelationInput | PaymentLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentLinks.
     */
    cursor?: PaymentLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLinks.
     */
    skip?: number
    distinct?: PaymentLinkScalarFieldEnum | PaymentLinkScalarFieldEnum[]
  }

  /**
   * PaymentLink create
   */
  export type PaymentLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentLink.
     */
    data: XOR<PaymentLinkCreateInput, PaymentLinkUncheckedCreateInput>
  }

  /**
   * PaymentLink createMany
   */
  export type PaymentLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentLinks.
     */
    data: PaymentLinkCreateManyInput | PaymentLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentLink createManyAndReturn
   */
  export type PaymentLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentLinks.
     */
    data: PaymentLinkCreateManyInput | PaymentLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentLink update
   */
  export type PaymentLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentLink.
     */
    data: XOR<PaymentLinkUpdateInput, PaymentLinkUncheckedUpdateInput>
    /**
     * Choose, which PaymentLink to update.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink updateMany
   */
  export type PaymentLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentLinks.
     */
    data: XOR<PaymentLinkUpdateManyMutationInput, PaymentLinkUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLinks to update
     */
    where?: PaymentLinkWhereInput
  }

  /**
   * PaymentLink upsert
   */
  export type PaymentLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentLink to update in case it exists.
     */
    where: PaymentLinkWhereUniqueInput
    /**
     * In case the PaymentLink found by the `where` argument doesn't exist, create a new PaymentLink with this data.
     */
    create: XOR<PaymentLinkCreateInput, PaymentLinkUncheckedCreateInput>
    /**
     * In case the PaymentLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentLinkUpdateInput, PaymentLinkUncheckedUpdateInput>
  }

  /**
   * PaymentLink delete
   */
  export type PaymentLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
    /**
     * Filter which PaymentLink to delete.
     */
    where: PaymentLinkWhereUniqueInput
  }

  /**
   * PaymentLink deleteMany
   */
  export type PaymentLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLinks to delete
     */
    where?: PaymentLinkWhereInput
  }

  /**
   * PaymentLink without action
   */
  export type PaymentLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLink
     */
    select?: PaymentLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bvn: 'bvn',
    nin: 'nin',
    cacNumber: 'cacNumber',
    tin: 'tin',
    kycLevel: 'kycLevel',
    kycStatus: 'kycStatus',
    rejectionReason: 'rejectionReason',
    nibssId: 'nibssId',
    pagaReference: 'pagaReference',
    paystackSubaccountCode: 'paystackSubaccountCode',
    businessName: 'businessName',
    businessType: 'businessType',
    description: 'description',
    ownerName: 'ownerName',
    ownerDob: 'ownerDob',
    email: 'email',
    mobile: 'mobile',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    addressCity: 'addressCity',
    addressState: 'addressState',
    addressZip: 'addressZip',
    addressCountry: 'addressCountry',
    bankCode: 'bankCode',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    status: 'status',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const VirtualAccountScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    createdAt: 'createdAt'
  };

  export type VirtualAccountScalarFieldEnum = (typeof VirtualAccountScalarFieldEnum)[keyof typeof VirtualAccountScalarFieldEnum]


  export const QrCodeScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    type: 'type',
    nibssQrData: 'nibssQrData',
    qrImageUrl: 'qrImageUrl',
    amount: 'amount',
    reference: 'reference',
    isActive: 'isActive',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type QrCodeScalarFieldEnum = (typeof QrCodeScalarFieldEnum)[keyof typeof QrCodeScalarFieldEnum]


  export const PaymentLinkScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    url: 'url',
    amount: 'amount',
    description: 'description',
    isActive: 'isActive',
    clicks: 'clicks',
    createdAt: 'createdAt'
  };

  export type PaymentLinkScalarFieldEnum = (typeof PaymentLinkScalarFieldEnum)[keyof typeof PaymentLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'KycLevel'
   */
  export type EnumKycLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycLevel'>
    


  /**
   * Reference to a field of type 'KycLevel[]'
   */
  export type ListEnumKycLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycLevel[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'BusinessType'
   */
  export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>
    


  /**
   * Reference to a field of type 'BusinessType[]'
   */
  export type ListEnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MerchantStatus'
   */
  export type EnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus'>
    


  /**
   * Reference to a field of type 'MerchantStatus[]'
   */
  export type ListEnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QrType'
   */
  export type EnumQrTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QrType'>
    


  /**
   * Reference to a field of type 'QrType[]'
   */
  export type ListEnumQrTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QrType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: StringFilter<"Merchant"> | string
    userId?: StringFilter<"Merchant"> | string
    bvn?: StringNullableFilter<"Merchant"> | string | null
    nin?: StringNullableFilter<"Merchant"> | string | null
    cacNumber?: StringNullableFilter<"Merchant"> | string | null
    tin?: StringNullableFilter<"Merchant"> | string | null
    kycLevel?: EnumKycLevelFilter<"Merchant"> | $Enums.KycLevel
    kycStatus?: EnumKycStatusFilter<"Merchant"> | $Enums.KycStatus
    rejectionReason?: StringNullableFilter<"Merchant"> | string | null
    nibssId?: StringNullableFilter<"Merchant"> | string | null
    pagaReference?: StringNullableFilter<"Merchant"> | string | null
    paystackSubaccountCode?: StringNullableFilter<"Merchant"> | string | null
    businessName?: StringFilter<"Merchant"> | string
    businessType?: EnumBusinessTypeFilter<"Merchant"> | $Enums.BusinessType
    description?: StringNullableFilter<"Merchant"> | string | null
    ownerName?: StringFilter<"Merchant"> | string
    ownerDob?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    email?: StringFilter<"Merchant"> | string
    mobile?: StringFilter<"Merchant"> | string
    addressLine1?: StringFilter<"Merchant"> | string
    addressLine2?: StringNullableFilter<"Merchant"> | string | null
    addressCity?: StringFilter<"Merchant"> | string
    addressState?: StringFilter<"Merchant"> | string
    addressZip?: StringNullableFilter<"Merchant"> | string | null
    addressCountry?: StringFilter<"Merchant"> | string
    bankCode?: StringFilter<"Merchant"> | string
    accountNumber?: StringFilter<"Merchant"> | string
    accountName?: StringFilter<"Merchant"> | string
    status?: EnumMerchantStatusFilter<"Merchant"> | $Enums.MerchantStatus
    isActive?: BoolFilter<"Merchant"> | boolean
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    qrCodes?: QrCodeListRelationFilter
    paymentLinks?: PaymentLinkListRelationFilter
    virtualAccounts?: VirtualAccountListRelationFilter
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bvn?: SortOrderInput | SortOrder
    nin?: SortOrderInput | SortOrder
    cacNumber?: SortOrderInput | SortOrder
    tin?: SortOrderInput | SortOrder
    kycLevel?: SortOrder
    kycStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    nibssId?: SortOrderInput | SortOrder
    pagaReference?: SortOrderInput | SortOrder
    paystackSubaccountCode?: SortOrderInput | SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerName?: SortOrder
    ownerDob?: SortOrderInput | SortOrder
    email?: SortOrder
    mobile?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZip?: SortOrderInput | SortOrder
    addressCountry?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodes?: QrCodeOrderByRelationAggregateInput
    paymentLinks?: PaymentLinkOrderByRelationAggregateInput
    virtualAccounts?: VirtualAccountOrderByRelationAggregateInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    bvn?: string
    nin?: string
    cacNumber?: string
    tin?: string
    nibssId?: string
    pagaReference?: string
    paystackSubaccountCode?: string
    email?: string
    mobile?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    kycLevel?: EnumKycLevelFilter<"Merchant"> | $Enums.KycLevel
    kycStatus?: EnumKycStatusFilter<"Merchant"> | $Enums.KycStatus
    rejectionReason?: StringNullableFilter<"Merchant"> | string | null
    businessName?: StringFilter<"Merchant"> | string
    businessType?: EnumBusinessTypeFilter<"Merchant"> | $Enums.BusinessType
    description?: StringNullableFilter<"Merchant"> | string | null
    ownerName?: StringFilter<"Merchant"> | string
    ownerDob?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    addressLine1?: StringFilter<"Merchant"> | string
    addressLine2?: StringNullableFilter<"Merchant"> | string | null
    addressCity?: StringFilter<"Merchant"> | string
    addressState?: StringFilter<"Merchant"> | string
    addressZip?: StringNullableFilter<"Merchant"> | string | null
    addressCountry?: StringFilter<"Merchant"> | string
    bankCode?: StringFilter<"Merchant"> | string
    accountNumber?: StringFilter<"Merchant"> | string
    accountName?: StringFilter<"Merchant"> | string
    status?: EnumMerchantStatusFilter<"Merchant"> | $Enums.MerchantStatus
    isActive?: BoolFilter<"Merchant"> | boolean
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    qrCodes?: QrCodeListRelationFilter
    paymentLinks?: PaymentLinkListRelationFilter
    virtualAccounts?: VirtualAccountListRelationFilter
  }, "id" | "userId" | "bvn" | "nin" | "cacNumber" | "tin" | "nibssId" | "pagaReference" | "paystackSubaccountCode" | "email" | "mobile">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bvn?: SortOrderInput | SortOrder
    nin?: SortOrderInput | SortOrder
    cacNumber?: SortOrderInput | SortOrder
    tin?: SortOrderInput | SortOrder
    kycLevel?: SortOrder
    kycStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    nibssId?: SortOrderInput | SortOrder
    pagaReference?: SortOrderInput | SortOrder
    paystackSubaccountCode?: SortOrderInput | SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerName?: SortOrder
    ownerDob?: SortOrderInput | SortOrder
    email?: SortOrder
    mobile?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZip?: SortOrderInput | SortOrder
    addressCountry?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merchant"> | string
    userId?: StringWithAggregatesFilter<"Merchant"> | string
    bvn?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    nin?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    cacNumber?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    tin?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    kycLevel?: EnumKycLevelWithAggregatesFilter<"Merchant"> | $Enums.KycLevel
    kycStatus?: EnumKycStatusWithAggregatesFilter<"Merchant"> | $Enums.KycStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    nibssId?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    pagaReference?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    paystackSubaccountCode?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    businessName?: StringWithAggregatesFilter<"Merchant"> | string
    businessType?: EnumBusinessTypeWithAggregatesFilter<"Merchant"> | $Enums.BusinessType
    description?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    ownerName?: StringWithAggregatesFilter<"Merchant"> | string
    ownerDob?: DateTimeNullableWithAggregatesFilter<"Merchant"> | Date | string | null
    email?: StringWithAggregatesFilter<"Merchant"> | string
    mobile?: StringWithAggregatesFilter<"Merchant"> | string
    addressLine1?: StringWithAggregatesFilter<"Merchant"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    addressCity?: StringWithAggregatesFilter<"Merchant"> | string
    addressState?: StringWithAggregatesFilter<"Merchant"> | string
    addressZip?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    addressCountry?: StringWithAggregatesFilter<"Merchant"> | string
    bankCode?: StringWithAggregatesFilter<"Merchant"> | string
    accountNumber?: StringWithAggregatesFilter<"Merchant"> | string
    accountName?: StringWithAggregatesFilter<"Merchant"> | string
    status?: EnumMerchantStatusWithAggregatesFilter<"Merchant"> | $Enums.MerchantStatus
    isActive?: BoolWithAggregatesFilter<"Merchant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
  }

  export type VirtualAccountWhereInput = {
    AND?: VirtualAccountWhereInput | VirtualAccountWhereInput[]
    OR?: VirtualAccountWhereInput[]
    NOT?: VirtualAccountWhereInput | VirtualAccountWhereInput[]
    id?: StringFilter<"VirtualAccount"> | string
    merchantId?: StringFilter<"VirtualAccount"> | string
    bankName?: StringFilter<"VirtualAccount"> | string
    accountNumber?: StringFilter<"VirtualAccount"> | string
    accountName?: StringFilter<"VirtualAccount"> | string
    createdAt?: DateTimeFilter<"VirtualAccount"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type VirtualAccountOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type VirtualAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountNumber?: string
    AND?: VirtualAccountWhereInput | VirtualAccountWhereInput[]
    OR?: VirtualAccountWhereInput[]
    NOT?: VirtualAccountWhereInput | VirtualAccountWhereInput[]
    merchantId?: StringFilter<"VirtualAccount"> | string
    bankName?: StringFilter<"VirtualAccount"> | string
    accountName?: StringFilter<"VirtualAccount"> | string
    createdAt?: DateTimeFilter<"VirtualAccount"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "accountNumber">

  export type VirtualAccountOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
    _count?: VirtualAccountCountOrderByAggregateInput
    _max?: VirtualAccountMaxOrderByAggregateInput
    _min?: VirtualAccountMinOrderByAggregateInput
  }

  export type VirtualAccountScalarWhereWithAggregatesInput = {
    AND?: VirtualAccountScalarWhereWithAggregatesInput | VirtualAccountScalarWhereWithAggregatesInput[]
    OR?: VirtualAccountScalarWhereWithAggregatesInput[]
    NOT?: VirtualAccountScalarWhereWithAggregatesInput | VirtualAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VirtualAccount"> | string
    merchantId?: StringWithAggregatesFilter<"VirtualAccount"> | string
    bankName?: StringWithAggregatesFilter<"VirtualAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"VirtualAccount"> | string
    accountName?: StringWithAggregatesFilter<"VirtualAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VirtualAccount"> | Date | string
  }

  export type QrCodeWhereInput = {
    AND?: QrCodeWhereInput | QrCodeWhereInput[]
    OR?: QrCodeWhereInput[]
    NOT?: QrCodeWhereInput | QrCodeWhereInput[]
    id?: StringFilter<"QrCode"> | string
    merchantId?: StringFilter<"QrCode"> | string
    type?: EnumQrTypeFilter<"QrCode"> | $Enums.QrType
    nibssQrData?: StringNullableFilter<"QrCode"> | string | null
    qrImageUrl?: StringNullableFilter<"QrCode"> | string | null
    amount?: DecimalNullableFilter<"QrCode"> | Decimal | DecimalJsLike | number | string | null
    reference?: StringFilter<"QrCode"> | string
    isActive?: BoolFilter<"QrCode"> | boolean
    createdAt?: DateTimeFilter<"QrCode"> | Date | string
    expiresAt?: DateTimeNullableFilter<"QrCode"> | Date | string | null
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type QrCodeOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    type?: SortOrder
    nibssQrData?: SortOrderInput | SortOrder
    qrImageUrl?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    reference?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type QrCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: QrCodeWhereInput | QrCodeWhereInput[]
    OR?: QrCodeWhereInput[]
    NOT?: QrCodeWhereInput | QrCodeWhereInput[]
    merchantId?: StringFilter<"QrCode"> | string
    type?: EnumQrTypeFilter<"QrCode"> | $Enums.QrType
    nibssQrData?: StringNullableFilter<"QrCode"> | string | null
    qrImageUrl?: StringNullableFilter<"QrCode"> | string | null
    amount?: DecimalNullableFilter<"QrCode"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"QrCode"> | boolean
    createdAt?: DateTimeFilter<"QrCode"> | Date | string
    expiresAt?: DateTimeNullableFilter<"QrCode"> | Date | string | null
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "reference">

  export type QrCodeOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    type?: SortOrder
    nibssQrData?: SortOrderInput | SortOrder
    qrImageUrl?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    reference?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: QrCodeCountOrderByAggregateInput
    _avg?: QrCodeAvgOrderByAggregateInput
    _max?: QrCodeMaxOrderByAggregateInput
    _min?: QrCodeMinOrderByAggregateInput
    _sum?: QrCodeSumOrderByAggregateInput
  }

  export type QrCodeScalarWhereWithAggregatesInput = {
    AND?: QrCodeScalarWhereWithAggregatesInput | QrCodeScalarWhereWithAggregatesInput[]
    OR?: QrCodeScalarWhereWithAggregatesInput[]
    NOT?: QrCodeScalarWhereWithAggregatesInput | QrCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QrCode"> | string
    merchantId?: StringWithAggregatesFilter<"QrCode"> | string
    type?: EnumQrTypeWithAggregatesFilter<"QrCode"> | $Enums.QrType
    nibssQrData?: StringNullableWithAggregatesFilter<"QrCode"> | string | null
    qrImageUrl?: StringNullableWithAggregatesFilter<"QrCode"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"QrCode"> | Decimal | DecimalJsLike | number | string | null
    reference?: StringWithAggregatesFilter<"QrCode"> | string
    isActive?: BoolWithAggregatesFilter<"QrCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QrCode"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"QrCode"> | Date | string | null
  }

  export type PaymentLinkWhereInput = {
    AND?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    OR?: PaymentLinkWhereInput[]
    NOT?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    id?: StringFilter<"PaymentLink"> | string
    merchantId?: StringFilter<"PaymentLink"> | string
    url?: StringFilter<"PaymentLink"> | string
    amount?: DecimalNullableFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    isActive?: BoolFilter<"PaymentLink"> | boolean
    clicks?: IntFilter<"PaymentLink"> | number
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }

  export type PaymentLinkOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    amount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type PaymentLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    OR?: PaymentLinkWhereInput[]
    NOT?: PaymentLinkWhereInput | PaymentLinkWhereInput[]
    merchantId?: StringFilter<"PaymentLink"> | string
    amount?: DecimalNullableFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    isActive?: BoolFilter<"PaymentLink"> | boolean
    clicks?: IntFilter<"PaymentLink"> | number
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
    merchant?: XOR<MerchantRelationFilter, MerchantWhereInput>
  }, "id" | "url">

  export type PaymentLinkOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    amount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentLinkCountOrderByAggregateInput
    _avg?: PaymentLinkAvgOrderByAggregateInput
    _max?: PaymentLinkMaxOrderByAggregateInput
    _min?: PaymentLinkMinOrderByAggregateInput
    _sum?: PaymentLinkSumOrderByAggregateInput
  }

  export type PaymentLinkScalarWhereWithAggregatesInput = {
    AND?: PaymentLinkScalarWhereWithAggregatesInput | PaymentLinkScalarWhereWithAggregatesInput[]
    OR?: PaymentLinkScalarWhereWithAggregatesInput[]
    NOT?: PaymentLinkScalarWhereWithAggregatesInput | PaymentLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentLink"> | string
    merchantId?: StringWithAggregatesFilter<"PaymentLink"> | string
    url?: StringWithAggregatesFilter<"PaymentLink"> | string
    amount?: DecimalNullableWithAggregatesFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"PaymentLink"> | string | null
    isActive?: BoolWithAggregatesFilter<"PaymentLink"> | boolean
    clicks?: IntWithAggregatesFilter<"PaymentLink"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PaymentLink"> | Date | string
  }

  export type MerchantCreateInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeCreateNestedManyWithoutMerchantInput
    paymentLinks?: PaymentLinkCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutMerchantInput
    paymentLinks?: PaymentLinkUncheckedCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUpdateManyWithoutMerchantNestedInput
    paymentLinks?: PaymentLinkUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUncheckedUpdateManyWithoutMerchantNestedInput
    paymentLinks?: PaymentLinkUncheckedUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MerchantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountCreateInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutVirtualAccountsInput
  }

  export type VirtualAccountUncheckedCreateInput = {
    id?: string
    merchantId: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
  }

  export type VirtualAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutVirtualAccountsNestedInput
  }

  export type VirtualAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountCreateManyInput = {
    id?: string
    merchantId: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
  }

  export type VirtualAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrCodeCreateInput = {
    id?: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
    merchant: MerchantCreateNestedOneWithoutQrCodesInput
  }

  export type QrCodeUncheckedCreateInput = {
    id?: string
    merchantId: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type QrCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant?: MerchantUpdateOneRequiredWithoutQrCodesNestedInput
  }

  export type QrCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QrCodeCreateManyInput = {
    id?: string
    merchantId: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type QrCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QrCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentLinkCreateInput = {
    id?: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutPaymentLinksInput
  }

  export type PaymentLinkUncheckedCreateInput = {
    id?: string
    merchantId: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
  }

  export type PaymentLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutPaymentLinksNestedInput
  }

  export type PaymentLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLinkCreateManyInput = {
    id?: string
    merchantId: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
  }

  export type PaymentLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumKycLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.KycLevel | EnumKycLevelFieldRefInput<$PrismaModel>
    in?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumKycLevelFilter<$PrismaModel> | $Enums.KycLevel
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type EnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumMerchantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusFilter<$PrismaModel> | $Enums.MerchantStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QrCodeListRelationFilter = {
    every?: QrCodeWhereInput
    some?: QrCodeWhereInput
    none?: QrCodeWhereInput
  }

  export type PaymentLinkListRelationFilter = {
    every?: PaymentLinkWhereInput
    some?: PaymentLinkWhereInput
    none?: PaymentLinkWhereInput
  }

  export type VirtualAccountListRelationFilter = {
    every?: VirtualAccountWhereInput
    some?: VirtualAccountWhereInput
    none?: VirtualAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QrCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VirtualAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bvn?: SortOrder
    nin?: SortOrder
    cacNumber?: SortOrder
    tin?: SortOrder
    kycLevel?: SortOrder
    kycStatus?: SortOrder
    rejectionReason?: SortOrder
    nibssId?: SortOrder
    pagaReference?: SortOrder
    paystackSubaccountCode?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    ownerName?: SortOrder
    ownerDob?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZip?: SortOrder
    addressCountry?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bvn?: SortOrder
    nin?: SortOrder
    cacNumber?: SortOrder
    tin?: SortOrder
    kycLevel?: SortOrder
    kycStatus?: SortOrder
    rejectionReason?: SortOrder
    nibssId?: SortOrder
    pagaReference?: SortOrder
    paystackSubaccountCode?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    ownerName?: SortOrder
    ownerDob?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZip?: SortOrder
    addressCountry?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bvn?: SortOrder
    nin?: SortOrder
    cacNumber?: SortOrder
    tin?: SortOrder
    kycLevel?: SortOrder
    kycStatus?: SortOrder
    rejectionReason?: SortOrder
    nibssId?: SortOrder
    pagaReference?: SortOrder
    paystackSubaccountCode?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    description?: SortOrder
    ownerName?: SortOrder
    ownerDob?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZip?: SortOrder
    addressCountry?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumKycLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycLevel | EnumKycLevelFieldRefInput<$PrismaModel>
    in?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumKycLevelWithAggregatesFilter<$PrismaModel> | $Enums.KycLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycLevelFilter<$PrismaModel>
    _max?: NestedEnumKycLevelFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type EnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMerchantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MerchantRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type VirtualAccountCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type VirtualAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type VirtualAccountMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQrTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QrType | EnumQrTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQrTypeFilter<$PrismaModel> | $Enums.QrType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type QrCodeCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    type?: SortOrder
    nibssQrData?: SortOrder
    qrImageUrl?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type QrCodeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type QrCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    type?: SortOrder
    nibssQrData?: SortOrder
    qrImageUrl?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type QrCodeMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    type?: SortOrder
    nibssQrData?: SortOrder
    qrImageUrl?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type QrCodeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumQrTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QrType | EnumQrTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQrTypeWithAggregatesFilter<$PrismaModel> | $Enums.QrType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQrTypeFilter<$PrismaModel>
    _max?: NestedEnumQrTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PaymentLinkCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLinkAvgOrderByAggregateInput = {
    amount?: SortOrder
    clicks?: SortOrder
  }

  export type PaymentLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLinkMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLinkSumOrderByAggregateInput = {
    amount?: SortOrder
    clicks?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QrCodeCreateNestedManyWithoutMerchantInput = {
    create?: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput> | QrCodeCreateWithoutMerchantInput[] | QrCodeUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutMerchantInput | QrCodeCreateOrConnectWithoutMerchantInput[]
    createMany?: QrCodeCreateManyMerchantInputEnvelope
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
  }

  export type PaymentLinkCreateNestedManyWithoutMerchantInput = {
    create?: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput> | PaymentLinkCreateWithoutMerchantInput[] | PaymentLinkUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutMerchantInput | PaymentLinkCreateOrConnectWithoutMerchantInput[]
    createMany?: PaymentLinkCreateManyMerchantInputEnvelope
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
  }

  export type VirtualAccountCreateNestedManyWithoutMerchantInput = {
    create?: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput> | VirtualAccountCreateWithoutMerchantInput[] | VirtualAccountUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutMerchantInput | VirtualAccountCreateOrConnectWithoutMerchantInput[]
    createMany?: VirtualAccountCreateManyMerchantInputEnvelope
    connect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
  }

  export type QrCodeUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput> | QrCodeCreateWithoutMerchantInput[] | QrCodeUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutMerchantInput | QrCodeCreateOrConnectWithoutMerchantInput[]
    createMany?: QrCodeCreateManyMerchantInputEnvelope
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
  }

  export type PaymentLinkUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput> | PaymentLinkCreateWithoutMerchantInput[] | PaymentLinkUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutMerchantInput | PaymentLinkCreateOrConnectWithoutMerchantInput[]
    createMany?: PaymentLinkCreateManyMerchantInputEnvelope
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
  }

  export type VirtualAccountUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput> | VirtualAccountCreateWithoutMerchantInput[] | VirtualAccountUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutMerchantInput | VirtualAccountCreateOrConnectWithoutMerchantInput[]
    createMany?: VirtualAccountCreateManyMerchantInputEnvelope
    connect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumKycLevelFieldUpdateOperationsInput = {
    set?: $Enums.KycLevel
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type EnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumMerchantStatusFieldUpdateOperationsInput = {
    set?: $Enums.MerchantStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QrCodeUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput> | QrCodeCreateWithoutMerchantInput[] | QrCodeUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutMerchantInput | QrCodeCreateOrConnectWithoutMerchantInput[]
    upsert?: QrCodeUpsertWithWhereUniqueWithoutMerchantInput | QrCodeUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: QrCodeCreateManyMerchantInputEnvelope
    set?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    disconnect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    delete?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    update?: QrCodeUpdateWithWhereUniqueWithoutMerchantInput | QrCodeUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: QrCodeUpdateManyWithWhereWithoutMerchantInput | QrCodeUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
  }

  export type PaymentLinkUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput> | PaymentLinkCreateWithoutMerchantInput[] | PaymentLinkUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutMerchantInput | PaymentLinkCreateOrConnectWithoutMerchantInput[]
    upsert?: PaymentLinkUpsertWithWhereUniqueWithoutMerchantInput | PaymentLinkUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: PaymentLinkCreateManyMerchantInputEnvelope
    set?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    disconnect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    delete?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    update?: PaymentLinkUpdateWithWhereUniqueWithoutMerchantInput | PaymentLinkUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: PaymentLinkUpdateManyWithWhereWithoutMerchantInput | PaymentLinkUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
  }

  export type VirtualAccountUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput> | VirtualAccountCreateWithoutMerchantInput[] | VirtualAccountUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutMerchantInput | VirtualAccountCreateOrConnectWithoutMerchantInput[]
    upsert?: VirtualAccountUpsertWithWhereUniqueWithoutMerchantInput | VirtualAccountUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: VirtualAccountCreateManyMerchantInputEnvelope
    set?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    disconnect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    delete?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    connect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    update?: VirtualAccountUpdateWithWhereUniqueWithoutMerchantInput | VirtualAccountUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: VirtualAccountUpdateManyWithWhereWithoutMerchantInput | VirtualAccountUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: VirtualAccountScalarWhereInput | VirtualAccountScalarWhereInput[]
  }

  export type QrCodeUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput> | QrCodeCreateWithoutMerchantInput[] | QrCodeUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutMerchantInput | QrCodeCreateOrConnectWithoutMerchantInput[]
    upsert?: QrCodeUpsertWithWhereUniqueWithoutMerchantInput | QrCodeUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: QrCodeCreateManyMerchantInputEnvelope
    set?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    disconnect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    delete?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    update?: QrCodeUpdateWithWhereUniqueWithoutMerchantInput | QrCodeUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: QrCodeUpdateManyWithWhereWithoutMerchantInput | QrCodeUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
  }

  export type PaymentLinkUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput> | PaymentLinkCreateWithoutMerchantInput[] | PaymentLinkUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: PaymentLinkCreateOrConnectWithoutMerchantInput | PaymentLinkCreateOrConnectWithoutMerchantInput[]
    upsert?: PaymentLinkUpsertWithWhereUniqueWithoutMerchantInput | PaymentLinkUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: PaymentLinkCreateManyMerchantInputEnvelope
    set?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    disconnect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    delete?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    connect?: PaymentLinkWhereUniqueInput | PaymentLinkWhereUniqueInput[]
    update?: PaymentLinkUpdateWithWhereUniqueWithoutMerchantInput | PaymentLinkUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: PaymentLinkUpdateManyWithWhereWithoutMerchantInput | PaymentLinkUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
  }

  export type VirtualAccountUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput> | VirtualAccountCreateWithoutMerchantInput[] | VirtualAccountUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: VirtualAccountCreateOrConnectWithoutMerchantInput | VirtualAccountCreateOrConnectWithoutMerchantInput[]
    upsert?: VirtualAccountUpsertWithWhereUniqueWithoutMerchantInput | VirtualAccountUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: VirtualAccountCreateManyMerchantInputEnvelope
    set?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    disconnect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    delete?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    connect?: VirtualAccountWhereUniqueInput | VirtualAccountWhereUniqueInput[]
    update?: VirtualAccountUpdateWithWhereUniqueWithoutMerchantInput | VirtualAccountUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: VirtualAccountUpdateManyWithWhereWithoutMerchantInput | VirtualAccountUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: VirtualAccountScalarWhereInput | VirtualAccountScalarWhereInput[]
  }

  export type MerchantCreateNestedOneWithoutVirtualAccountsInput = {
    create?: XOR<MerchantCreateWithoutVirtualAccountsInput, MerchantUncheckedCreateWithoutVirtualAccountsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutVirtualAccountsInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutVirtualAccountsNestedInput = {
    create?: XOR<MerchantCreateWithoutVirtualAccountsInput, MerchantUncheckedCreateWithoutVirtualAccountsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutVirtualAccountsInput
    upsert?: MerchantUpsertWithoutVirtualAccountsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutVirtualAccountsInput, MerchantUpdateWithoutVirtualAccountsInput>, MerchantUncheckedUpdateWithoutVirtualAccountsInput>
  }

  export type MerchantCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<MerchantCreateWithoutQrCodesInput, MerchantUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutQrCodesInput
    connect?: MerchantWhereUniqueInput
  }

  export type EnumQrTypeFieldUpdateOperationsInput = {
    set?: $Enums.QrType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MerchantUpdateOneRequiredWithoutQrCodesNestedInput = {
    create?: XOR<MerchantCreateWithoutQrCodesInput, MerchantUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutQrCodesInput
    upsert?: MerchantUpsertWithoutQrCodesInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutQrCodesInput, MerchantUpdateWithoutQrCodesInput>, MerchantUncheckedUpdateWithoutQrCodesInput>
  }

  export type MerchantCreateNestedOneWithoutPaymentLinksInput = {
    create?: XOR<MerchantCreateWithoutPaymentLinksInput, MerchantUncheckedCreateWithoutPaymentLinksInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutPaymentLinksInput
    connect?: MerchantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutPaymentLinksNestedInput = {
    create?: XOR<MerchantCreateWithoutPaymentLinksInput, MerchantUncheckedCreateWithoutPaymentLinksInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutPaymentLinksInput
    upsert?: MerchantUpsertWithoutPaymentLinksInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutPaymentLinksInput, MerchantUpdateWithoutPaymentLinksInput>, MerchantUncheckedUpdateWithoutPaymentLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumKycLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.KycLevel | EnumKycLevelFieldRefInput<$PrismaModel>
    in?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumKycLevelFilter<$PrismaModel> | $Enums.KycLevel
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedEnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMerchantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusFilter<$PrismaModel> | $Enums.MerchantStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumKycLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycLevel | EnumKycLevelFieldRefInput<$PrismaModel>
    in?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycLevel[] | ListEnumKycLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumKycLevelWithAggregatesFilter<$PrismaModel> | $Enums.KycLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycLevelFilter<$PrismaModel>
    _max?: NestedEnumKycLevelFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQrTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QrType | EnumQrTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQrTypeFilter<$PrismaModel> | $Enums.QrType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumQrTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QrType | EnumQrTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QrType[] | ListEnumQrTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQrTypeWithAggregatesFilter<$PrismaModel> | $Enums.QrType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQrTypeFilter<$PrismaModel>
    _max?: NestedEnumQrTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type QrCodeCreateWithoutMerchantInput = {
    id?: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type QrCodeUncheckedCreateWithoutMerchantInput = {
    id?: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type QrCodeCreateOrConnectWithoutMerchantInput = {
    where: QrCodeWhereUniqueInput
    create: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput>
  }

  export type QrCodeCreateManyMerchantInputEnvelope = {
    data: QrCodeCreateManyMerchantInput | QrCodeCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentLinkCreateWithoutMerchantInput = {
    id?: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
  }

  export type PaymentLinkUncheckedCreateWithoutMerchantInput = {
    id?: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
  }

  export type PaymentLinkCreateOrConnectWithoutMerchantInput = {
    where: PaymentLinkWhereUniqueInput
    create: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput>
  }

  export type PaymentLinkCreateManyMerchantInputEnvelope = {
    data: PaymentLinkCreateManyMerchantInput | PaymentLinkCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type VirtualAccountCreateWithoutMerchantInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
  }

  export type VirtualAccountUncheckedCreateWithoutMerchantInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
  }

  export type VirtualAccountCreateOrConnectWithoutMerchantInput = {
    where: VirtualAccountWhereUniqueInput
    create: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput>
  }

  export type VirtualAccountCreateManyMerchantInputEnvelope = {
    data: VirtualAccountCreateManyMerchantInput | VirtualAccountCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type QrCodeUpsertWithWhereUniqueWithoutMerchantInput = {
    where: QrCodeWhereUniqueInput
    update: XOR<QrCodeUpdateWithoutMerchantInput, QrCodeUncheckedUpdateWithoutMerchantInput>
    create: XOR<QrCodeCreateWithoutMerchantInput, QrCodeUncheckedCreateWithoutMerchantInput>
  }

  export type QrCodeUpdateWithWhereUniqueWithoutMerchantInput = {
    where: QrCodeWhereUniqueInput
    data: XOR<QrCodeUpdateWithoutMerchantInput, QrCodeUncheckedUpdateWithoutMerchantInput>
  }

  export type QrCodeUpdateManyWithWhereWithoutMerchantInput = {
    where: QrCodeScalarWhereInput
    data: XOR<QrCodeUpdateManyMutationInput, QrCodeUncheckedUpdateManyWithoutMerchantInput>
  }

  export type QrCodeScalarWhereInput = {
    AND?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
    OR?: QrCodeScalarWhereInput[]
    NOT?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
    id?: StringFilter<"QrCode"> | string
    merchantId?: StringFilter<"QrCode"> | string
    type?: EnumQrTypeFilter<"QrCode"> | $Enums.QrType
    nibssQrData?: StringNullableFilter<"QrCode"> | string | null
    qrImageUrl?: StringNullableFilter<"QrCode"> | string | null
    amount?: DecimalNullableFilter<"QrCode"> | Decimal | DecimalJsLike | number | string | null
    reference?: StringFilter<"QrCode"> | string
    isActive?: BoolFilter<"QrCode"> | boolean
    createdAt?: DateTimeFilter<"QrCode"> | Date | string
    expiresAt?: DateTimeNullableFilter<"QrCode"> | Date | string | null
  }

  export type PaymentLinkUpsertWithWhereUniqueWithoutMerchantInput = {
    where: PaymentLinkWhereUniqueInput
    update: XOR<PaymentLinkUpdateWithoutMerchantInput, PaymentLinkUncheckedUpdateWithoutMerchantInput>
    create: XOR<PaymentLinkCreateWithoutMerchantInput, PaymentLinkUncheckedCreateWithoutMerchantInput>
  }

  export type PaymentLinkUpdateWithWhereUniqueWithoutMerchantInput = {
    where: PaymentLinkWhereUniqueInput
    data: XOR<PaymentLinkUpdateWithoutMerchantInput, PaymentLinkUncheckedUpdateWithoutMerchantInput>
  }

  export type PaymentLinkUpdateManyWithWhereWithoutMerchantInput = {
    where: PaymentLinkScalarWhereInput
    data: XOR<PaymentLinkUpdateManyMutationInput, PaymentLinkUncheckedUpdateManyWithoutMerchantInput>
  }

  export type PaymentLinkScalarWhereInput = {
    AND?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
    OR?: PaymentLinkScalarWhereInput[]
    NOT?: PaymentLinkScalarWhereInput | PaymentLinkScalarWhereInput[]
    id?: StringFilter<"PaymentLink"> | string
    merchantId?: StringFilter<"PaymentLink"> | string
    url?: StringFilter<"PaymentLink"> | string
    amount?: DecimalNullableFilter<"PaymentLink"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"PaymentLink"> | string | null
    isActive?: BoolFilter<"PaymentLink"> | boolean
    clicks?: IntFilter<"PaymentLink"> | number
    createdAt?: DateTimeFilter<"PaymentLink"> | Date | string
  }

  export type VirtualAccountUpsertWithWhereUniqueWithoutMerchantInput = {
    where: VirtualAccountWhereUniqueInput
    update: XOR<VirtualAccountUpdateWithoutMerchantInput, VirtualAccountUncheckedUpdateWithoutMerchantInput>
    create: XOR<VirtualAccountCreateWithoutMerchantInput, VirtualAccountUncheckedCreateWithoutMerchantInput>
  }

  export type VirtualAccountUpdateWithWhereUniqueWithoutMerchantInput = {
    where: VirtualAccountWhereUniqueInput
    data: XOR<VirtualAccountUpdateWithoutMerchantInput, VirtualAccountUncheckedUpdateWithoutMerchantInput>
  }

  export type VirtualAccountUpdateManyWithWhereWithoutMerchantInput = {
    where: VirtualAccountScalarWhereInput
    data: XOR<VirtualAccountUpdateManyMutationInput, VirtualAccountUncheckedUpdateManyWithoutMerchantInput>
  }

  export type VirtualAccountScalarWhereInput = {
    AND?: VirtualAccountScalarWhereInput | VirtualAccountScalarWhereInput[]
    OR?: VirtualAccountScalarWhereInput[]
    NOT?: VirtualAccountScalarWhereInput | VirtualAccountScalarWhereInput[]
    id?: StringFilter<"VirtualAccount"> | string
    merchantId?: StringFilter<"VirtualAccount"> | string
    bankName?: StringFilter<"VirtualAccount"> | string
    accountNumber?: StringFilter<"VirtualAccount"> | string
    accountName?: StringFilter<"VirtualAccount"> | string
    createdAt?: DateTimeFilter<"VirtualAccount"> | Date | string
  }

  export type MerchantCreateWithoutVirtualAccountsInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeCreateNestedManyWithoutMerchantInput
    paymentLinks?: PaymentLinkCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutVirtualAccountsInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutMerchantInput
    paymentLinks?: PaymentLinkUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutVirtualAccountsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutVirtualAccountsInput, MerchantUncheckedCreateWithoutVirtualAccountsInput>
  }

  export type MerchantUpsertWithoutVirtualAccountsInput = {
    update: XOR<MerchantUpdateWithoutVirtualAccountsInput, MerchantUncheckedUpdateWithoutVirtualAccountsInput>
    create: XOR<MerchantCreateWithoutVirtualAccountsInput, MerchantUncheckedCreateWithoutVirtualAccountsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutVirtualAccountsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutVirtualAccountsInput, MerchantUncheckedUpdateWithoutVirtualAccountsInput>
  }

  export type MerchantUpdateWithoutVirtualAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUpdateManyWithoutMerchantNestedInput
    paymentLinks?: PaymentLinkUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutVirtualAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUncheckedUpdateManyWithoutMerchantNestedInput
    paymentLinks?: PaymentLinkUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutQrCodesInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLinks?: PaymentLinkCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutQrCodesInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLinks?: PaymentLinkUncheckedCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutQrCodesInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutQrCodesInput, MerchantUncheckedCreateWithoutQrCodesInput>
  }

  export type MerchantUpsertWithoutQrCodesInput = {
    update: XOR<MerchantUpdateWithoutQrCodesInput, MerchantUncheckedUpdateWithoutQrCodesInput>
    create: XOR<MerchantCreateWithoutQrCodesInput, MerchantUncheckedCreateWithoutQrCodesInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutQrCodesInput, MerchantUncheckedUpdateWithoutQrCodesInput>
  }

  export type MerchantUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLinks?: PaymentLinkUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLinks?: PaymentLinkUncheckedUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutPaymentLinksInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutPaymentLinksInput = {
    id?: string
    userId: string
    bvn?: string | null
    nin?: string | null
    cacNumber?: string | null
    tin?: string | null
    kycLevel?: $Enums.KycLevel
    kycStatus?: $Enums.KycStatus
    rejectionReason?: string | null
    nibssId?: string | null
    pagaReference?: string | null
    paystackSubaccountCode?: string | null
    businessName: string
    businessType?: $Enums.BusinessType
    description?: string | null
    ownerName: string
    ownerDob?: Date | string | null
    email: string
    mobile: string
    addressLine1?: string
    addressLine2?: string | null
    addressCity?: string
    addressState?: string
    addressZip?: string | null
    addressCountry?: string
    bankCode: string
    accountNumber: string
    accountName: string
    status?: $Enums.MerchantStatus
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutMerchantInput
    virtualAccounts?: VirtualAccountUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutPaymentLinksInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutPaymentLinksInput, MerchantUncheckedCreateWithoutPaymentLinksInput>
  }

  export type MerchantUpsertWithoutPaymentLinksInput = {
    update: XOR<MerchantUpdateWithoutPaymentLinksInput, MerchantUncheckedUpdateWithoutPaymentLinksInput>
    create: XOR<MerchantCreateWithoutPaymentLinksInput, MerchantUncheckedCreateWithoutPaymentLinksInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutPaymentLinksInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutPaymentLinksInput, MerchantUncheckedUpdateWithoutPaymentLinksInput>
  }

  export type MerchantUpdateWithoutPaymentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutPaymentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    cacNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tin?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevel?: EnumKycLevelFieldUpdateOperationsInput | $Enums.KycLevel
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    nibssId?: NullableStringFieldUpdateOperationsInput | string | null
    pagaReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubaccountCode?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerDob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: StringFieldUpdateOperationsInput | string
    addressState?: StringFieldUpdateOperationsInput | string
    addressZip?: NullableStringFieldUpdateOperationsInput | string | null
    addressCountry?: StringFieldUpdateOperationsInput | string
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QrCodeUncheckedUpdateManyWithoutMerchantNestedInput
    virtualAccounts?: VirtualAccountUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type QrCodeCreateManyMerchantInput = {
    id?: string
    type: $Enums.QrType
    nibssQrData?: string | null
    qrImageUrl?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    reference: string
    isActive?: boolean
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type PaymentLinkCreateManyMerchantInput = {
    id?: string
    url: string
    amount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    isActive?: boolean
    clicks?: number
    createdAt?: Date | string
  }

  export type VirtualAccountCreateManyMerchantInput = {
    id?: string
    bankName: string
    accountNumber: string
    accountName: string
    createdAt?: Date | string
  }

  export type QrCodeUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QrCodeUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QrCodeUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQrTypeFieldUpdateOperationsInput | $Enums.QrType
    nibssQrData?: NullableStringFieldUpdateOperationsInput | string | null
    qrImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reference?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentLinkUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLinkUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLinkUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualAccountUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MerchantCountOutputTypeDefaultArgs instead
     */
    export type MerchantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerchantDefaultArgs instead
     */
    export type MerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerchantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VirtualAccountDefaultArgs instead
     */
    export type VirtualAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VirtualAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QrCodeDefaultArgs instead
     */
    export type QrCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QrCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentLinkDefaultArgs instead
     */
    export type PaymentLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentLinkDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}