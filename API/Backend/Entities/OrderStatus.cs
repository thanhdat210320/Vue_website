﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Entities
{
    public enum OrderStatus
    {
        InProgress,
        Confirmed,
        Shipping,
        Success,
        Canceled
    }
}
