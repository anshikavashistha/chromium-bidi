/**
 * Copyright 2024 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * THIS FILE IS AUTOGENERATED. Run `node tools/generate-bidi-types.mjs` to regenerate.
 * @see https://github.com/w3c/webdriver-bidi/blob/master/index.bs
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck Some types may be circular.

import z from 'zod';

export const PermissionsCommandSchema = z.lazy(
  () => Permissions.SetPermissionSchema
);
export namespace Permissions {
  export const PermissionDescriptorSchema = z.lazy(() =>
    z.object({
      name: z.string(),
    })
  );
}
export namespace Permissions {
  export const PermissionStateSchema = z.lazy(() =>
    z.enum(['granted', 'denied', 'prompt'])
  );
}
export namespace Permissions {
  export const SetPermissionSchema = z.lazy(() =>
    z.object({
      method: z.literal('permissions.setPermission'),
      params: Permissions.SetPermissionParametersSchema,
    })
  );
}
export namespace Permissions {
  export const SetPermissionParametersSchema = z.lazy(() =>
    z.object({
      descriptor: Permissions.PermissionDescriptorSchema,
      state: Permissions.PermissionStateSchema,
      origin: z.string(),
    })
  );
}
